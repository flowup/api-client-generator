import { Spec as Swagger } from 'swagger-schema-official';

const BASIC_TS_TYPE_REGEX = /^string|number|integer|boolean|null|undefined|any|Object|Date|File|Blob$/;

export function camelCase(text: string = '', lowerFirstLetter: boolean = true): string {
  text = removeDuplicateWords(text);

  if (/^[A-Z0-9]+$/.test(text) || text === '') {
    return text;
  }

  const camelText = text.split(/[-.]/).map(word => `${word[0].toUpperCase()}${word.substring(1)}`).join('');

  return lowerFirstLetter ? `${camelText[0].toLowerCase()}${camelText.substring(1)}` : camelText;
}

export function dashCase(text: string = ''): string {
  text = text.replace(/([A-Z]+)(?![^A-Z])/g, (g) => `-${g.toLowerCase()}`); // transform abbreviations (for example: ID, HTTP, ...)
  return text.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).replace(/^-/, '');
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
 * example: shipmentShipmentAddress --> shipmentAddress
 *
 * note: minimum is 3 letters otherwise words are not striped
 *
 * @param {string} text
 * @returns {string}
 */
export function removeDuplicateWords(text: string): string {
  return text.replace(/^(.{3,})(?=\1)/ig, '');
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
    return 'any';
  } else if (/^array$/i.test(type)) {
    console.warn('Support for nested arrays is limited, using any[] as type');
    return 'any[]';
  }

  return typeName(type);
}

export function typeName(name: string = 'any', isArray: boolean = false): string {
  const type = BASIC_TS_TYPE_REGEX.test(name) ? name : camelCase(name, false);

  return `${type}${isArray ? '[]' : ''}`;
}

export function fileName(name: string = '', type: 'model' | 'enum' = 'model'): string {
  return `${dashCase(name.replace(/model|enum/i, ''))}.${type}`;
}

export function prefixImportedModels(type: string = ''): string {
  return BASIC_TS_TYPE_REGEX.test(type) ? type : `models.${type}`;
}

export function determineDomain({schemes, host, basePath}: Swagger): string {

  // if the host is defined then try and use a protocol from the swagger file
  // otherwise use the current protocol of loaded app
  const protocol = host && schemes && schemes.length > 0 ? `${schemes[0]}://` : '//';

  // if no host exists in the swagger file use a window location relative path
  const domain = host
    ? host
    : '${window.location.hostname}${window.location.port ? \':\'+window.location.port : \'\'}'; /* tslint:disable-line */
  const base = ('/' === basePath || !basePath ? '' : basePath);
  return `${protocol}${domain}${base}`;
}
