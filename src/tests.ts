import { compare, DiffSet, State } from 'dir-compare';
import { exists, mkdir } from 'fs';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import { generateAPIClient } from '../src/generator';

const testReferences = ['esquare', 'gcloud-firestore', 'github'];

const compareOptions = {compareSize: true};
const stateSymbols: {[key in State]: string} = {
  equal: '==',
  left: '->',
  right: '<-',
  distinct: '!=',
};

async function runTests(): Promise<number> {
  const testsOutDir = `${__dirname}/../tests/tests-output`;

  if (await promisify(exists)(testsOutDir)) {
    await promisify(rimraf)(testsOutDir);
  }

  await promisify(mkdir)(testsOutDir);

  const testReturnValues = await Promise.all(testReferences.map(async (reference) => {
    console.info(`Running test for ${reference}`);

    const refDir = `${__dirname}/../tests/${reference}`;
    const genDir = `${testsOutDir}/${reference}`;

    await generateAPIClient(`${refDir}/swagger.yaml`, genDir)
      .catch((err: Error) => console.error(`Error has occurred while generating api client for ${reference}`, err));

    const {same, equal, distinct, differences, left, right, diffSet} = await compare(`${refDir}/api`, genDir, compareOptions);

    if (!same) {
      console.group(`Stats for ${reference}`);
      console.info(`equal: ${equal}`);
      console.info(`distinct: ${distinct}`);
      console.info(`left: ${left}`);
      console.info(`right: ${right}`);
      console.info(`differences: ${differences}\n`);

      console.info('[ reference dir ]         [ test dir ]');
      diffSet.forEach(({name1, name2, state, type1, type2}: DiffSet) => {
        if (stateSymbols[state] !== stateSymbols.equal) {
          console.info(`(${type1}) ${name1}  ${stateSymbols[state]}  ${name2} (${type2})`);
        }
      });

      console.info(`\nUse diff on folders below to acquire more info`);
      console.info(`diff ${refDir}/api ${genDir}\n\n`);

      console.groupEnd();

      return 1;
    } else {
      console.info(`Test for ${reference} has successfully passed\n\n`);
      await promisify(rimraf)(genDir);
      return 0;
    }
  }));

  return testReturnValues.reduce((acc: number, cur: 0 | 1) => acc + cur, 0);
}

runTests().then((failedTestsCount) => {
  if (failedTestsCount) {
    console.info(`Tests execution has ended. ${failedTestsCount} of ${testReferences.length} tests has failed\n`);
    process.exit(1);
  } else {
    console.info('Tests execution has ended successfully');
  }
});
