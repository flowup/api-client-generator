import { Generator } from './generator';
import * as opt from 'optimist';
import * as fs from 'fs';

/**
 * Object.entries polyfill
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */
if (!Object.entries) {
  Object.entries = (obj) => {
    let ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

let optimist = opt
  .usage('Usage: a4apigen -s path/to/swagger.[json|yaml]')
  .alias('h', 'help')
  .alias('s', 'source')
  .alias('o', 'output')
  .describe('s', 'Path to the swagger file')
  .describe('o', 'Path where generated files should be emitted');

let argv = optimist.argv;

if (argv.help) {
  optimist.showHelp();
  process.exit(0);
}

let fromSource = false;

if (typeof argv.source !== 'undefined' && argv.source !== true) {
  fromSource = true;
} else {
  console.error('Swagger file (-s) must be specified. See --help');
  process.exit(1);
}

let outputDir = argv.output || './output';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

let sourceFile = argv.source;
let g = new Generator(sourceFile, outputDir, true);

g.generateAPIClient();
