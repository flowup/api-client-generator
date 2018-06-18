import { compare, DiffSet, State } from 'dir-compare';
import { existsSync, mkdir } from 'fs';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import { generateAPIClient } from '../src/generator';

const enum Colors {
  Reset = '\x1b[0m',
  Red = '\x1b[31m',
  Green = '\x1b[32m',
}

class TestReference {
  constructor(
    public name: string,
    public swaggerFileExt: string = 'yaml',
    public skipIndex: boolean = false,
    public apiName?: string) {
  }
}

const testReferences: TestReference[] = [
  new TestReference('custom'),
  new TestReference('esquare'),
  new TestReference('gcloud-firestore'),
  new TestReference('github'),
  new TestReference('filtered-api', 'json', true, 'DummySelector')];

const compareOptions = { compareSize: true };
const stateSymbols: { [key in State]: string } = {
  equal: '==',
  left: '->',
  right: '<-',
  distinct: '!=',
};

async function runTests(): Promise<number> {
  const testsOutDir = `${__dirname}/../tests/tests-output`;

  if (existsSync(testsOutDir)) {
    await promisify(rimraf)(testsOutDir);
  }

  await promisify(mkdir)(testsOutDir);

  const testReturnValues = await Promise.all(testReferences.map(async (reference) => {
    console.info(`Running test for ${reference.name}`);

    const refDir = `${__dirname}/../tests/${reference.name}`;
    const genDir = `${testsOutDir}/${reference.name}`;

    await generateAPIClient({
      sourceFile: `${refDir}/swagger.${reference.swaggerFileExt}`,
      outputPath: genDir,
      skipModuleExport: reference.skipIndex,
      apiName: reference.apiName
    })
      .catch((err: Error) => console.error(`Error has occurred while generating api client for ${reference.name}`, err));

    const { same, equal, distinct, differences, left, right, diffSet } = await compare(`${refDir}/api`, genDir, compareOptions);

    if (!same) {
      console.info(Colors.Red, `Test for ${reference.name} has failed\n`, Colors.Reset);
      console.group(`Stats for ${reference.name}`);
      console.info(`equal: ${equal}`);
      console.info(`distinct: ${distinct}`);
      console.info(`left: ${left}`);
      console.info(`right: ${right}`);
      console.info(`differences: ${differences}\n`);

      console.info('[ reference dir ]         [ test dir ]');
      diffSet.forEach(({ name1, name2, state, type1, type2 }: DiffSet) => {
        if (stateSymbols[state] !== stateSymbols.equal) {
          console.info(`(${type1}) ${name1}  ${stateSymbols[state]}  ${name2} (${type2})`);
        }
      });

      console.info(`\nUse diff on folders below to acquire more info`);
      console.info(`diff ${refDir}/api ${genDir}\n\n`);

      console.groupEnd();

      return 1;
    } else {
      console.info(Colors.Green, `Test for ${reference.name} has successfully passed\n\n`, Colors.Reset);
      await promisify(rimraf)(genDir);
      return 0;
    }
  }));

  return testReturnValues.reduce((acc: number, cur: 0 | 1) => acc + cur, 0);
}

runTests().then((failedTestsCount) => {
  if (failedTestsCount) {
    console.info(Colors.Red, `Tests execution has ended. ${failedTestsCount} of ${testReferences.length} tests has failed\n`, Colors.Reset);
    process.exit(1);
  } else {
    console.info(Colors.Green, 'Tests execution has ended successfully, all tests have passed.', Colors.Reset);
  }
});
