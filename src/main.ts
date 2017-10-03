import { Generator } from './generator';
import * as opt from 'optimist';
import * as fs from 'fs';

/**
 * Object.entries polyfill
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */
if (!Object.entries) {
  Object.entries = function (obj) {
    let ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

let optimist = opt
  .usage('Usage: a4apigen -s path/to/swagger.json')
  .alias('h', 'help')
  .alias('s', 'source')
  .alias('u', 'url')
  .alias('o', 'outputpath')
  .describe('s', 'Path to the swagger.json file')
  .describe('u', 'URL of the swagger.json file')
  .describe('o', 'Path where to store the generated files');

let argv = optimist.argv;

if (argv.help) {
  optimist.showHelp();
  process.exit(0);
}

let fromSource = false;
let fromUrl = false;
if (typeof argv.source !== 'undefined' && argv.source !== true) {
  fromSource = true;
}
else if (typeof argv.url !== 'undefined' && argv.url !== true) {
  fromUrl = true;
}
else {
  console.error('Swagger file (-s) or url (-u) must be specified. See --help');
  process.exit(1);
}

let outputdir = argv.outputpath || './output';

if (!fs.existsSync(outputdir)) {
  fs.mkdirSync(outputdir);
}

let sourceFile = argv.source;

let g = new Generator(sourceFile, outputdir, true);
g.generateAPIClient();
