#!/usr/bin/env node

import { generateAPIClient } from './generator';
import * as opt from 'optimist';
import { commitAfter } from './git';

const optimist = opt
  .usage('Usage: api-client-generator -s path/to/swagger.[json|yaml]')
  .alias('h', 'help')
  .alias('s', 'source')
  .alias('o', 'output')
  .alias('C', 'commit')
  .alias('v', 'verbose')
  .describe('s', 'Path to the swagger file')
  .describe('o', 'Path where generated files should be emitted')
  .describe('C', 'Autocommit changes')
  .describe('v', 'Print error stack traces');

const argv = optimist.argv;

if (argv.help) {
  optimist.showHelp();
  process.exit(0);
}

if (typeof argv.source === 'undefined' && argv.source !== true) {
  console.error('Swagger file (-s) must be specified. See --help');
  process.exit(1);
}

const outputDir = argv.output || './output';
const sourceFile = argv.source;
const generate: typeof generateAPIClient = argv.commit ?
  commitAfter(generateAPIClient, {addPath: outputDir}) :
  generateAPIClient;

generate(sourceFile, outputDir)
  .then(() => console.info('Angular API client generated successfully'))
  .catch((error: Error) => console.error(
    ...argv.verbose ?
      ['Error encountered during generating:', error] :
      [error.message]
  ));
