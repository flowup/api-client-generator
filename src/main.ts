#!/usr/bin/env node

import { generateAPIClient, MODEL_DIR_NAME } from './generator';
import * as opt from 'optimist';
import { commitAfter } from './git';
import { readdirSync } from 'fs';
import { join } from 'path';
import { logWarn } from './helper';

const optimist = opt
  .usage('Usage: api-client-generator -s path/to/swagger.[json|yaml]')
  .alias('h', 'help')
  .alias('s', 'source')
  .alias('o', 'output')
  .alias('C', 'commit')
  .alias('v', 'verbose')
  .alias('t', 'splitPathTags')
  .alias('g', 'skipGuards')
  .alias('m', 'skipModule')
  .describe('s', 'Path to the swagger file')
  .describe('o', 'Path where generated files should be emitted')
  .describe('C', 'Autocommit changes')
  .describe('v', 'Print error stack traces')
  .describe(
    't',
    'Generates services and models only for the specified tags.' +
      ' Use `,` (comma) as the separator for multiple tags. Use `all` to emit a service per tag',
  )
  .describe('g', 'Skip creating type guards and guarded client')
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

export const GLOBAL_OPTIONS = {
  outputPath: argv.output || './output',
  sourceFile: argv.source,
  splitPathTags:
    'splitPathTags' in argv ? (argv.splitPathTags || 'all').split(',') : [],
  skipModuleExport: argv.skipModule === true || argv.skipModule === 'true',
  skipGuards: argv.skipGuards,
} as const;

const generate: typeof generateAPIClient = argv.commit
  ? commitAfter(generateAPIClient)
  : generateAPIClient;

generate()
  .then(newFiles => {
    console.info('Angular API client generated successfully');

    const legacyFiles = readdirSync(join(argv.output, MODEL_DIR_NAME))
      .map(file => join(argv.output, MODEL_DIR_NAME, file))
      .filter(file => !newFiles.includes(file));
    if (legacyFiles.length > 0) {
      logWarn(`\nLegacy models discovered:\n${legacyFiles.join('\n')}`);
    }
  })
  .catch((error: Error) => {
    console.error(
      ...(argv.verbose
        ? ['Error encountered during generating:', error]
        : [error.message]),
    );
    throw error;
  });
