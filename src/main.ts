#!/usr/bin/env node

import { generateAPIClient } from './generator';
import * as opt from 'optimist';
import * as fs from 'fs';

const optimist = opt
  .usage('Usage: api-client-generator -s path/to/swagger.[json|yaml]')
  .alias('h', 'help')
  .alias('s', 'source')
  .alias('o', 'output')
  .describe('s', 'Path to the swagger file')
  .describe('o', 'Path where generated files should be emitted');

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

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const sourceFile = argv.source;

generateAPIClient(sourceFile, outputDir)
  .then(() => console.info('Angular API client generated successfully'))
  .catch((error: Error) => console.error('Error encored during generating', error));
