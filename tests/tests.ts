import { compare, DiffSet, Result, State } from 'dir-compare';
import { exists, mkdir } from 'fs';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import { generateAPIClient } from '../src/generator';

// const testReferences = ['esquare', 'gcloud-firestore', 'sports'];
const testReferences = ['esquare'];

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
    await promisify(rimraf)(testsOutDir)
      .then(() => {
        console.info('test output deleted');
      });
  }

  await promisify(mkdir)(testsOutDir);

  await testReferences.forEach(async (reference) => {
    console.log(`Running test for ${reference}`);

    const refDir = `${__dirname}/${reference}`;
    const genDir = `${testsOutDir}/${reference}/api`;

    await generateAPIClient(`${refDir}/swagger.yaml`, genDir);

    compare(`${refDir}/api`, genDir, compareOptions).then(
      ({same, equal, distinct, differences, left, right, diffSet}: Result) => {
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

          console.groupEnd();
        } else {
          console.log(`Test for ${reference} has successfully passed`);
        }
      }
    );
  });
}

runTests().then(() => console.info('Tests execution has ended'));