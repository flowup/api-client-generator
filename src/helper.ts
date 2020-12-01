import { Reference } from 'swagger-schema-official';
import { FileInfix } from './types';

export const BASIC_TS_TYPE_REGEX = /\b(?:string|number|integer|bigint|boolean|object|void)\b/;
const BUILD_IN_TS_TYPE_REGEX = /^(?:string|number|integer|bigint|boolean|null|undefined|any|void|object|Object|File)\b/; // TODO: integer can be renamed with "typeName" and "determineResponseType" refactor

export const ADDITIONAL_PROPERTIES_KEY = '[key: string]';

export function toCamelCase(
  text: string = '',
  lowerFirst: boolean = true,
): string {
  if (/^[A-Z0-9]+$/.test(text) || text === '') {
    return text;
  }

  let camelText = text
    .split(/[-._\/\\+*]/)
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
      ? 'number' // TODO: this can probably be removed as soon as determineResponseType is refactored (in most of the cases it needs to use "to TypescriptType" instead of "typeName")
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
  return `Object.values(${name}).every((value: unknown) => ${guard('value')})`;
}

export function guardArray(
  name: string,
  guard: (name: string) => string,
): string {
  return `( Array.isArray(${name}) && ${name}.every((item: unknown) => ${guard(
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

// tslint:disable-next-line no-any
export function isReference(param: any | Reference): param is Reference {
  return !!(param as Reference).$ref;
}

export function importableType(type: string): string {
  return type
    ?.replace(/(\[\])|({\s?\[.+\]:\s?)|(\s?})|(models\.?)/g, '')
    .trim();
}
