import { Reference } from 'swagger-schema-official';
import { FileInfix, Property } from './types';

export const BASIC_TS_TYPE_REGEX = /\b(?:string|number|integer|bigint|boolean|object|void)\b/;
const BUILD_IN_TS_TYPE_REGEX = /^(?:string|number|integer|boolean|null|undefined|any|void|Object|File|Blob)\b/i;

export const ADDITIONAL_PROPERTIES_KEY = '[key: string]';

export function toCamelCase(
  text: string = '',
  lowerFirst: boolean = true,
): string {
  if (/^[A-Z0-9]+$/.test(text) || text === '') {
    return text;
  }

  const camelText = text
    .split(/[-._\/\\+*]/)
    .filter(word => !!word) // skip empty words
    .map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join('');

  return removeDuplicateWords(
    lowerFirst
      ? /^([A-Z]+(?=[A-Z]))/.test(camelText)
        ? camelText.replace(/^([A-Z]+(?=[A-Z]))/, firstWord =>
            firstWord.toLowerCase(),
          )
        : `${camelText[0].toLowerCase()}${camelText.substring(1)}`
      : camelText,
  );
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

export function toTypescriptType(type: string | undefined): string {
  if (!type) {
    return 'any';
  }

  if (/^(number|integer|double)$/i.test(type)) {
    return 'number';
  } else if (/^(string|boolean)$/i.test(type)) {
    return type.toLocaleLowerCase();
  } else if (/^(object)$/i.test(type)) {
    return 'object';
  } else if (/^(array)$/i.test(type)) {
    logWarn('Support for nested arrays is limited, using any[] as type');
    return 'any[]';
  }

  return typeName(type);
}

const PARENT_PROP_PLACEHOLDER = '<-';

export function accessProp(arg: string): string {
  return arg.startsWith(PARENT_PROP_PLACEHOLDER)
    ? arg.replace(PARENT_PROP_PLACEHOLDER, '')
    : arg.startsWith("'")
    ? `arg[${arg}]`
    : `arg.${arg}`;
}

function guardArray(prop: Property): string {
  return `(Array.isArray(${accessProp(prop.name)}) && ${accessProp(
    prop.name,
  )}.every((item: unknown) => ${
    prop.isPrimitiveType
      ? `typeof item === '${prop.type}'` // basic types
      : prop.typescriptType && prop.typescriptType.endsWith('[]') // checks if item is nested array type
      ? `(Array.isArray(item) && item.every((itemItem: unknown) => ${(prop.isPrimitiveType
          ? `typeof itemItem === '${prop.type}'` // basic types of nested array
          : `is${prop.typescriptType}(itemItem)`
        ) // structured types of nested array
          .replace('[]', '')}))`
      : `is${prop.typescriptType}(item)` // structured types
  }))`;
}

export function guardFn(fn: () => string, prop: Property): string {
  return `
      ${
        prop.isRequired
          ? ''
          : `typeof ${accessProp(prop.name)} === 'undefined' ||`
      }
      ${
        prop.name === ADDITIONAL_PROPERTIES_KEY || prop.isDictionary
          ? `Object.values(arg${
              prop.isDictionary ? `.${prop.name}` : ''
            }).every((value: unknown) => ${
              prop.isArray
                ? guardArray({
                    ...prop,
                    name: `${PARENT_PROP_PLACEHOLDER}value`,
                  })
                : prop.isPrimitiveType
                ? `typeof value === '${prop.type}'`
                : `is${prop.typescriptType}(value)`
            })`
          : prop.isArray
          ? guardArray(prop)
          : `${
              prop.isPrimitiveType
                ? `typeof ${accessProp(prop.name)} === '${prop.type}'`
                : fn()
            }`
      }
      `;
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
  return BUILD_IN_TS_TYPE_REGEX.test(type) ? type : `models.${typeName(type)}`;
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
