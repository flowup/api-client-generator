#!/usr/bin/env node

import { generateAPIClient } from './generator';
import * as opt from 'optimist';
import { GenOptions } from './types';

const optimist = opt
  .usage('Usage: api-client-generator -s path/to/swagger.[json|yaml]')
  .alias('h', 'help')
  .alias('s', 'source')
  .alias('o', 'output')
  .alias('n', 'apiName')
  .alias('m', 'emitModule')
  .describe('s', 'Path to the swagger file')
  .describe('o', 'Path where generated files should be emitted')
  .describe('n', 'Generates actions and models only for the specified api')
  .describe('m', 'Skip creating index file with module export');


const argv = optimist.argv;

if (argv.help) {
  optimist.showHelp();
  process.exit(0);
}

if (typeof argv.source === 'undefined' && argv.source !== true) {
  console.error('Swagger file (-s) must be specified. See --help');
  process.exit(1);
}

const options: GenOptions = {
  outputPath: argv.output || './output',
  sourceFile: argv.source,
  apiName: argv.apiName,
  skipModuleExport: argv.emitModule === 'true'
};

generateAPIClient(options)
  .then(() => console.info('Angular API client generated successfully'))
  .catch((error: Error) => console.error('Error encored during generating', error));
