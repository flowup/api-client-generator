import { sync as whichSync } from 'which';
import { spawnSync } from 'child_process';
import { version } from '../package.json';

type AsyncProcedure = (...args: any[]) => Promise<void>; // tslint:disable-line no-any

interface CommitOptions {
  addPath: string;
}

const COMMIT_MESSAGE = `chore(api-client): generated using version ${version}`;
const COMMIT_AUTHOR = 'api-client-generator <api-client-generator@flowup.cz>';

export function commitAfter(func: AsyncProcedure, {addPath}: CommitOptions): AsyncProcedure {
  return async (...args: any[]) => { // tslint:disable-line no-any
    if (whichSync('git', {nothrow: true}) == null) {
      throw new Error('Git not installed on system');
    }

    if (stagedChanges()) {
      throw new Error('There are staged changes in your repository');
    }

    await func(...args);
    addFiles(addPath);
    commitChanges();
  };
}

function stagedChanges(): boolean {
  const {status, stdout} = spawnSync('git', ['status', '--porcelain'], {encoding: 'utf8'});
  if (status !== 0) {
    throw new Error('Not inside a Git repository');
  }

  return stdout.split('\n').some(line => line.startsWith('A'));
}

function addFiles(addPath: string): void {
  const {status, stderr} = spawnSync('git', ['add', addPath]);
  if (status !== 0) {
    throw new Error(`Error adding "${addPath}":\n${stderr}`);
  }
}

function commitChanges(): void {
  const commitArgs = ['--allow-empty', '--author', COMMIT_AUTHOR, '-m', COMMIT_MESSAGE];
  const {status, stderr} = spawnSync('git', ['commit', ...commitArgs], {encoding: 'utf8'});
  if (status !== 0) {
    throw new Error(`Error committing:\n${stderr}`);
  }
}
