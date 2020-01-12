import { sync as whichSync } from 'which';
import { spawnSync } from 'child_process';
import { cwd } from 'process';
import { version } from '../package.json';
import { ClientGenerator } from './types';

const COMMIT_MESSAGE = `chore(api-client): generated using version ${version}`;
const COMMIT_AUTHOR = 'api-client-generator <api-client-generator@flowup.cz>';

/**
 * Decorates the client generator with an add&commit (with automatic message and author) performed in the CWD.
 * @param generator The client generation function.
 * @returns Decorated `procedure`.
 * @throws A descriptive Error if there are any staged changes in the current repo or if any of the necessary Git commands fail.
 */
export function commitAfter(generator: ClientGenerator): ClientGenerator {
  // tslint:disable-next-line no-any
  return async (...args: any[]) => {
    if (whichSync('git', { nothrow: true }) == null) {
      throw new Error('"git" command not found on your system');
    }

    if (stagedChanges()) {
      throw new Error(
        'There are staged changes in your repository -- please commit, reset or stash them and re-run the generator',
      );
    }

    const filePaths = await generator(...args);
    addFiles(filePaths);
    commitChanges();
    return filePaths;
  };
}

/**
 * Scans the output of `git status` for staged changes.
 * @returns Whether there are any staged changes.
 * @throws A descriptive Error if `git status` fails.
 */
function stagedChanges(): boolean {
  const { status, stdout, stderr } = spawnSync(
    'git',
    ['status', '--porcelain'],
    { encoding: 'utf8' },
  );
  if (status !== 0) {
    throw new Error(`Error performing "git status" in "${cwd()}":\n${stderr}`);
  }

  return stdout.split('\n').some(line => line.startsWith('A'));
}

/**
 * Performs `git add` of given files.
 * @param addPaths Paths to the files to stage.
 * @throws A descriptive Error if `git add` fails.
 */
function addFiles(addPaths: string[]): void {
  addPaths.forEach(path => {
    const { status, stderr } = spawnSync('git', ['add', path]);
    if (status !== 0) {
      throw new Error(
        `Error performing "git add ${path}" in "${cwd()}":\n${stderr}`,
      );
    }
  });
}

/**
 * Performs `git commit` with author and message defined in module-level constants.
 * @throws A descriptive Error if `git commit` fails.
 */
function commitChanges(): void {
  const commitArgs = [
    '--allow-empty',
    '--author',
    COMMIT_AUTHOR,
    '-m',
    COMMIT_MESSAGE,
  ];
  const { status, stderr } = spawnSync('git', ['commit', ...commitArgs], {
    encoding: 'utf8',
  });
  if (status !== 0) {
    throw new Error(`Error performing "git commit" in "${cwd()}":\n${stderr}`);
  }
}
