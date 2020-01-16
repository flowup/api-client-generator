import { Reference } from 'swagger-schema-official';
import { FileInfix } from './types';

export const BASIC_TS_TYPE_REGEX = /\b(?:string|number|integer|boolean|void)\b/;
const BUILD_IN_TS_TYPE_REGEX = /^(?:string|number|integer|boolean|null|undefined|any|void|Object|File|Blob)\b/i;
export const BUILD_GUARD_HELPERS_REGEX = /is(string|number|integer|boolean|any|Object|File|Blob)\(/gm;

export const ADDITIONAL_PROPERTIES_KEY = '[key: string]';

export function toCamelCase(
  text: string = '',
  lowerFirst: boolean = true,
): string {
  text = removeDuplicateWords(text);

  if (/^[A-Z0-9]+$/.test(text) || text === '') {
    return text;
  }

  const camelText = text
    .split(/[-._\/\\+*]/)
    .filter(word => !!word) // skip empty words
    .map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join('');

  return lowerFirst
    ? /^([A-Z]+(?=[A-Z]))/.test(camelText)
      ? camelText.replace(/^([A-Z]+(?=[A-Z]))/, firstWord =>
          firstWord.toLowerCase(),
        )
      : `${camelText[0].toLowerCase()}${camelText.substring(1)}`
    : camelText;
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
 * note: minimum is 3 letters otherwise words are not striped
 *
 * @param {string} text
 * @returns {string}
 */
export function removeDuplicateWords(text: string = ''): string {
  return text.replace(/(.{3,})(?=\1)/gi, '');
}

export function toTypescriptType(type: string | undefined): string {
  if (!type) {
    return 'any';
  }

  if (/^number|integer|double$/i.test(type)) {
    return 'number';
  } else if (/^string|boolean$/i.test(type)) {
    return type.toLocaleLowerCase();
  } else if (/^object$/i.test(type)) {
    return '{ [key: string]: any }';
  } else if (/^array$/i.test(type)) {
    logWarn('Support for nested arrays is limited, using any[] as type');
    return 'any[]';
  }

  return typeName(type);
}

export function typeName(
  name: string = 'any',
  isArray: boolean = false,
): string {
  const type = BASIC_TS_TYPE_REGEX.test(name)
    ? /\binteger\b/.test(name)
      ? 'number'
      : name
    : toCamelCase(name, false);

  return `${type}${isArray ? '[]' : ''}`;
}

export function fileName(name: string = '', type: FileInfix = 'model'): string {
  return `${dashCase(name)}.${type}`;
}

export function prefixImportedModels(type: string = ''): string {
  return BUILD_IN_TS_TYPE_REGEX.test(type) ? type : `models.${type}`;
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
