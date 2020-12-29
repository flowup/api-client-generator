import { compare, Difference, DifferenceState } from 'dir-compare';
import { existsSync, mkdir } from 'fs';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import { generateAPIClient } from './generator';

const TESTS_OUT_DIR = `${__dirname}/../tests/tests-output`;

class TestReference {
  readonly refDir = `${__dirname}/../tests/${this.name}`;
  readonly genDir = `${TESTS_OUT_DIR}/${this.name}`;

  constructor(
    public readonly name: string,
    public readonly swaggerFileExt: string = 'yaml',
    public readonly skipIndex: boolean = false,
    public readonly tags?: string,
  ) {}
}

const COMPARE_OPTIONS = {
  compareSize: true,
};

const stateSymbols: { [key in DifferenceState]: string } = {
  equal: '==',
  left: '->',
  right: '<-',
  distinct: '!=',
};

async function compareWithReference(
  reference: TestReference,
): Promise<string | null> {
  await generateAPIClient({
    sourceFile: `${reference.refDir}/swagger.${reference.swaggerFileExt}`,
    outputPath: reference.genDir,
    skipModuleExport: reference.skipIndex,
    splitPathTags: reference.tags ? reference.tags.split(',') : [],
  }).catch((err: Error) =>
    console.error(
      `Error has occurred while generating api client for ${reference.name}`,
      err,
    ),
  );

  const {
    same,
    equal,
    distinct,
    differences,
    left,
    right,
    diffSet,
  } = await compare(
    `${reference.refDir}/api`,
    reference.genDir,
    COMPARE_OPTIONS,
  );

  if (!same) {
    let result = ' Output should be the same, but there are differences.\n\n';
    result += `differences: ${differences}\n\n`;
    result += `equal: ${equal}\n`;
    result += `distinct: ${distinct}\n`;
    result += `left: ${left}\n`;
    result += `right: ${right}\n`;
    result += '[ reference dir ]               [ test dir ]\n';

    diffSet?.forEach(({ name1, name2, state, type1, type2 }: Difference) => {
      if (stateSymbols[state] !== stateSymbols.equal) {
        result += `(${type1}) ${name1}  ${stateSymbols[state]}  ${name2} (${type2})\n`;
      }
    });

    return `${result}\nUse diff on folders below to acquire more info\ndiff ${reference.refDir}/api ${reference.genDir}\n\n`;
  }

  await promisify(rimraf)(reference.genDir);
  return null;
}

describe('Diff compare', () => {
  beforeAll(async () => {
    if (existsSync(TESTS_OUT_DIR)) {
      await promisify(rimraf)(TESTS_OUT_DIR);
    }

    await promisify(mkdir)(TESTS_OUT_DIR);
  });

  it('should check with [ custom ] reference', async () => {
    const reference = new TestReference('custom');
    expect(await compareWithReference(reference)).toBeNull();
  });

  it('should check with [ esquare ] reference', async () => {
    const reference = new TestReference('esquare');
    expect(await compareWithReference(reference)).toBeNull();
  });

  it('should check with [ GCloud firestore ] reference', async () => {
    const reference = new TestReference('gcloud-firestore');
    expect(await compareWithReference(reference)).toBeNull();
  });

  it('should check with [ GitHub ] reference', async () => {
    const reference = new TestReference('github', 'yaml', false, 'all');
    expect(await compareWithReference(reference)).toBeNull();
  });

  it('should check with [ filtered API ] reference', async () => {
    const reference = new TestReference(
      'filtered-api',
      'json',
      true,
      'DummySelector,NonExistingTag,Project,Products',
    );
    expect(await compareWithReference(reference)).toBeNull();
  });

  it('should check with [ All tags ] reference', async () => {
    const reference = new TestReference('with-all-tags', 'json', false, 'all');
    expect(await compareWithReference(reference)).toBeNull();
  });
});
