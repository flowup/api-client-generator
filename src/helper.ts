import { FileInfix } from './types';

const BUILD_IN_TS_TYPE_REGEX = /^(?:string|number|integer|bigint|boolean|null|undefined|any|void|object|Object|File)\b/; // integer is mapped to number in later step of `typeName` conversion

export const ADDITIONAL_PROPERTIES_KEY = '[key: string]';

export function toCamelCase(
  text: string = '',
  lowerFirst: boolean = true,
): string {
  if (/^[A-Z0-9]+$/.test(text) || text === '') {
    return text;
  }

  let camelText = text
    .split(/[^a-zA-Z0-9$]/)
    .filter(word => !!word) // skip empty words
    .map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join('');

  if (lowerFirst) {
    camelText = /^([A-Z]+(?=[A-Z]))/.test(camelText)
      ? camelText.replace(/^([A-Z]+(?=[A-Z]))/, firstWord =>
          firstWord.toLowerCase(),
        )
      : `${camelText[0].toLowerCase()}${camelText.substring(1)}`;
  }

  return removeDuplicateWords(camelText);
}

export function dashCase(text: string = ''): string {
  text = text.replace(/([A-Z]+)(?![^A-Z])/g, g => `-${g.toLowerCase()}`); // transform abbreviations (for example: ID, HTTP, ...)
  return text
    .replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
    .replace(/^-/, '');
}

/**
 * Strip #/definitions prefix from a type string
 * @param {string} refString
 * @returns {string}
 */
export function dereferenceType(refString: string | undefined): string {
  if (!refString) {
    return '';
  }

  return refString.replace(/#\/(?:definitions|parameters)\//, '');
}

/**
 * Removes duplicate words from type name
 *
 * example: shipmentShipmentAddress --> ShipmentAddress
 *
 * note: minimum is 3 letters otherwise words are kept in place
 *
 * @param {string} text
 * @returns {string}
 */
export function removeDuplicateWords(text: string = ''): string {
  const next = text.replace(/(.{3,})(?=\1)/gi, '');

  if (next !== text) {
    removeDuplicateWords(next);
  }

  return next;
}

export function typeName(
  name: string = 'any',
  isArray: boolean = false,
): string {
  const type = BUILD_IN_TS_TYPE_REGEX.test(name)
    ? /\binteger\b/.test(name)
      ? 'number'
      : name
    : toCamelCase(name, false);

  return `${type}${isArray ? '[]' : ''}`;
}

export function accessProp(name: string): string {
  return name.startsWith("'") ? `arg[${name}]` : `arg.${name}`;
}

export function guardOptional(
  name: string,
  isRequired: boolean | undefined,
  guard: (name: string) => string,
): string {
  return isRequired
    ? guard(name)
    : `( typeof ${name} === 'undefined' || ${guard(name)} )`;
}

export function guardDictionary(
  name: string,
  guard: (name: string) => string,
): string {
  return `Object.values(${name}).every((value: any) => ${guard('value')})`;
}

export function guardArray(
  name: string,
  guard: (name: string) => string,
): string {
  return `( Array.isArray(${name}) && ${name}.every((item: any) => ${guard(
    'item',
  )}) )`;
}

export function fileName(name: string = '', type: FileInfix = 'model'): string {
  return `${dashCase(name)}.${type}`;
}

export function replaceNewLines(
  str: string = '',
  replaceValue: string = '',
): string {
  return str.replace(/(\r\n|\r|\n)/g, replaceValue);
}

export function createDocsComment(
  desc: string,
  indent: number = 2,
  forceMultiline = false,
): string {
  const indentSpaces = ' '.repeat(indent);
  return desc
    ? forceMultiline || desc.includes('\n')
      ? `${replaceNewLines(
          `/**\n${desc}`,
          `$1${indentSpaces} * `,
        )}\n${indentSpaces} */`
      : `/** ${desc} */`
    : '';
}

export function logWarn(str: string): void {
  console.warn('\x1b[33m%s\x1b[0m', str);
}

/**
 * Aggregates an array of promises of arrays to a single promise of a flattened array.
 * @param promises An array of promises that resolve to arrays of values.
 * @returns A promise to an array of single values.
 */
export async function flattenAll<T>(promises: Promise<T[]>[]): Promise<T[]> {
  return Array.prototype.concat(...(await Promise.all(promises)));
}

export function compareStringByKey<T>(key: keyof T): (a: T, b: T) => number {
  return (a, b) =>
    a[key] && b[key] ? `${a[key]}`.localeCompare(`${b[key]}`) : -1;
}

/**
 * Escape all the non ASCII characters in the string.
 *
 * @param string that will be escaped
 * @return string with non ASCII characters escaped in format `\u####`
 */
export function unicodeEscape(string: string): string {
  return string
    .split('')
    .map(char => {
      const charCode = char.charCodeAt(0);
      return charCode > 127
        ? `\\u${charCode.toString(16).padStart(4, '0')}`
        : char;
    })
    .join('');
}
