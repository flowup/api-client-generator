#!/usr/bin/env node

import { generateAPIClient } from './generator';
import * as opt from 'optimist';
import { GenOptions } from './types';
import { commitAfter } from './git';

const optimist = opt
  .usage('Usage: api-client-generator -s path/to/swagger.[json|yaml]')
  .alias('h', 'help')
  .alias('s', 'source')
  .alias('o', 'output')
  .alias('C', 'commit')
  .alias('v', 'verbose')
  .alias('n', 'apiName')
  .alias('m', 'skipModule')
  .describe('s', 'Path to the swagger file')
  .describe('o', 'Path where generated files should be emitted')
  .describe('C', 'Autocommit changes')
  .describe('v', 'Print error stack traces')
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
  skipModuleExport: argv.skipModule === true || argv.skipModule === 'true'
};


const generate: typeof generateAPIClient = argv.commit ?
  commitAfter(generateAPIClient, { addPath: options.outputPath }) :
  generateAPIClient;

generate(options)
  .then(() => console.info('Angular API client generated successfully'))
  .catch((error: Error) => console.error(
    ...argv.verbose ?
      ['Error encountered during generating:', error] :
      [error.message]
  ));
