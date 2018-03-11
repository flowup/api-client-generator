import { compare, DiffSet, State } from 'dir-compare';
import { exists, mkdir } from 'fs';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import { generateAPIClient } from '../src/generator';

const testReferences = ['esquare', 'gcloud-firestore'];

const compareOptions = {compareSize: true};
const stateSymbols: {[key in State]: string} = {
  'equal': '==',
  'left': '->',
  'right': '<-',
  'distinct': '!=',
};

async function runTests(): Promise<void> {
  const testsOutDir = `${__dirname}/tests-output`;

  if (await promisify(exists)(testsOutDir)) {
    await promisify(rimraf)(testsOutDir);
  }

  await promisify(mkdir)(testsOutDir);

  await Promise.all(testReferences.map(async (reference) => {
    console.log(`Running test for ${reference}`);

    const refDir = `${__dirname}/${reference}`;
    const genDir = `${testsOutDir}/${reference}`;

    await generateAPIClient(`${refDir}/swagger.yaml`, genDir)
      .catch((err: Error) => console.error(`Error has occurred while generating api client for ${reference}`, err));

    const {same, equal, distinct, differences, left, right, diffSet} = await compare(`${refDir}/api`, genDir, compareOptions);

    if (!same) {
      console.group(`Stats for ${reference}`);
      console.log(`equal: ${equal}`);
      console.log(`distinct: ${distinct}`);
      console.log(`left: ${left}`);
      console.log(`right: ${right}`);
      console.log(`differences: ${differences}\n`);

      console.log('[ reference dir ]         [ test dir ]');
      diffSet.forEach(({name1, name2, state, type1, type2}: DiffSet) => {
        if (stateSymbols[state] !== stateSymbols.equal) {
          console.log(`(${type1}) ${name1}  ${stateSymbols[state]}  ${name2} (${type2})`);
        }
      });

      console.log(`\nUse diff on folders below to acquire more info`);
      console.log(`diff ${refDir}/api ${genDir}\n\n`);

      console.groupEnd();
    } else {
      console.log(`Test for ${reference} has successfully passed\n\n`);
      await promisify(rimraf)(genDir);
    }
  }));
}

runTests().then(() => console.info('Tests execution has ended successfully'));