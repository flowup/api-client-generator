import { BodyParameter, QueryParameter, Response, Schema, Spec as Swagger, Operation } from 'swagger-schema-official';
import { Definition, Method, MethodType, MustacheData, Parameter, Property, Render, RenderFileName } from './types';
import {
  camelCase,
  dereferenceType,
  determineDomain,
  fileName,
  prefixImportedModels,
  replaceNewLines,
  toTypescriptType,
  typeName,
} from './helper';

interface Parameters {
  [parameterName: string]: BodyParameter | QueryParameter
}

interface ExtendedParameters {
  [parameterName: string]: ExtendedParameter
}

type ExtendedParameter = (BodyParameter | QueryParameter) & {
  'enum': (string | boolean | number | {})[];
  schema: Schema;
  type: 'string' | 'integer';
  required: boolean;
};

interface Definitions {
  [definitionsName: string]: Schema
}

export function createMustacheViewModel(swagger: Swagger, apiName?: string): MustacheData {
  const methods = parseMethods(swagger, apiName);
  return {
    isSecure: !!swagger.securityDefinitions,
    swagger: swagger,
    domain: determineDomain(swagger),
    methods: methods,
    definitions: parseDefinitions(swagger.definitions, swagger.parameters, apiName ? methods : undefined),
    serviceName: apiName ? `${apiName}Service` : 'APIClient',
    fileName: fileName(apiName ? apiName : 'api-client', 'service')
  };
}

function parseMethods({ paths, security, parameters }: Swagger, apiName?: string): Method[] {
  const supportedMethods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT'];

  return [].concat.apply([], Object.entries(paths)
    .map(([pathName, apiPath]) => Object.entries(apiPath)
      .filter(([methodType, operation]) => { // tslint:disable-line:whitespace
        const op = (<Operation>operation);
        return supportedMethods.indexOf(methodType.toUpperCase()) !== -1 && // skip unsupported methods
          (!apiName || (op.operationId && op.operationId.startsWith(apiName))); // if apiName is defined take only paths from this api
      })
      .map(([methodType, operation]) => {
        const responseType = determineResponseType(operation.responses);
        return {
          hasJsonResponse: true,
          isSecure: security !== undefined || operation.security !== undefined,
          methodName: camelCase(operation.operationId
            ? (!apiName ? operation.operationId : operation.operationId.replace(`${apiName}_`, ''))
            : `${methodType}_${pathName.replace(/[{}]/g, '')}`
          ),
          methodType: methodType.toUpperCase() as MethodType,
          parameters: transformParameters(operation.parameters, parameters || {}),
          // turn path interpolation `{this}` into string template `${args.this}
          path: pathName.replace(
            /{(.*?)}/g,
            (_: string, ...args: string[]): string => `\${args.${camelCase(args[0])}}`),
          responseType: responseType,
          response: prefixImportedModels(responseType),
          description: replaceNewLines(operation.description, '$1   * '),
        };
      }
      )
    ));
}

function parseDefinitions(
  definitions: Definitions = {},
  parameters: Parameters = {},
  methods?: Method[]
): Definition[] {
  const allDefs = [
    ...Object.entries(definitions)
      .map(([key, definition]) => defineEnumOrInterface(key, definition)),

    ...Object.entries(
      parameters as ExtendedParameters  // type cast because of wrong typing in BaseParameter (should contain enum property)
    ).filter(([, definition]) => (definition.enum && definition.enum.length !== 0) || definition.schema)
      .map(([key, definition]) => defineEnumOrInterface(key, definition)),
  ];

  if (methods) {
    const usedDefs: Definition[] = [];
    const filterByName = (name?: string) => {
      const filtered = allDefs.filter(d => d.name === name);

      const childs: Definition[] = [];
      filtered.forEach(d => d.properties.forEach(p => {
        if (p.typescriptType && p.isRef) {
          childs.push(...filterByName(p.typescriptType));
        }
      }));
      filtered.push(...childs);
      return filtered;
    };
    methods.forEach(method => {
      usedDefs.push(...filterByName(method.responseType));
      method.parameters.forEach(param => {
        usedDefs.push(...filterByName(param.typescriptType));
      });
    });

    return Array.from(new Set(usedDefs));
  } else {
    return allDefs;
  }
}

function defineEnumOrInterface(key: string, definition: Schema | ExtendedParameter): Definition {
  return definition.enum && definition.enum.length !== 0
    ? defineEnum(definition.enum, key, definition.type === 'integer', definition.description)
    : defineInterface(('schema' in definition ? definition.schema : definition) || {}, key);
}

function defineEnum(
  enumSchema: (string | boolean | number | {})[] = [],
  definitionKey: string,
  isNumeric: boolean = false,
  enumDesc: string = '',
): Definition {
  const splitDesc = enumDesc.split('\n');
  const descKeys: { [key: string]: string } | null = splitDesc.length > 1
    ? splitDesc.reduce<{ [key: string]: string }>(
      (acc, cur) => {
        const captured = /(\d) (\w+)/.exec(cur); // parse the `- 42 UltimateAnswer` description syntax
        return captured ? { ...acc, [captured[1]]: captured[2] } : acc;
      },
      {}
    )
    : null;

  return {
    name: typeName(definitionKey),
    properties: enumSchema && enumSchema.map((val) => ({
      name: isNumeric
        ? descKeys ? descKeys[val.toString()] : val.toString()
        : val.toString(),
      value: val.toString(),
    })),
    description: replaceNewLines(enumDesc, '$1 * '),
    isEnum: true,
    isNumeric,
    imports: [],
    renderFileName: (): RenderFileName => (text: string, render: Render): string => fileName(render(text), 'enum'),
  };
}

function parseInterfaceProperties(properties: { [propertyName: string]: Schema } = {}): Property[] {
  return Object.entries<Schema>(properties).map(
    ([propName, propSchema]: [string, Schema]) => {
      const isArray = /^array$/i.test(propSchema.type || '');
      const typescriptType = toTypescriptType(isArray
        ? determineArrayType(propSchema)
        : propSchema.$ref
          ? dereferenceType(propSchema.$ref)
          : propSchema.type
      );

      return {
        isArray,
        isRef: !!parseReference(propSchema),
        name: /^[A-Za-z_$][\w$]*$/.test(propName) ? propName : `'${propName}'`,
        description: replaceNewLines(propSchema.description),
        type: typescriptType.replace('[]', ''),
        typescriptType,
      };
    }
  ).sort((a, b) => a.name && b.name ? a.name.localeCompare(b.name) : -1);
}

function parseReference(schema: Schema): string {
  if ('$ref' in schema && schema.$ref) {
    return schema.$ref;
  } else if (schema.type === 'array' && schema.items) {
    if ('$ref' in schema.items && schema.items.$ref) {
      return schema.items.$ref;
    } else if (!Array.isArray(schema.items) && schema.items.items && '$ref' in schema.items.items && schema.items.items.$ref) {
      return schema.items.items.$ref;
    }
  }

  return '';
}

function determineArrayType(property: Schema = {}): string {
  if (Array.isArray(property.items)) {
    console.warn('Arrays with type diversity are currently not supported');
    return 'any';
  }

  if (property.items && property.items.$ref) {
    return typeName(dereferenceType(property.items.$ref));
  } else if (property.items && property.items.type) {
    if (/^array$/i.test(property.items.type || '')) {
      return `${determineArrayType(property.items)}[]`;
    }

    return typeName(property.items.type);
  }

  return typeName(property.type);
}

function defineInterface(schema: Schema, definitionKey: string): Definition {
  const name = typeName(definitionKey);
  const extendInterface: string | undefined = schema.allOf
    ? camelCase(dereferenceType((schema.allOf.find(allOfSchema => !!allOfSchema.$ref) || {}).$ref), false)
    : undefined;
  const allOfProps: Schema = schema.allOf ? schema.allOf.reduce((props, allOfSchema) => ({ ...props, ...allOfSchema.properties }), {}) : {};
  const properties: Property[] = parseInterfaceProperties({
    ...schema.properties,
    ...allOfProps,
  } as { [propertyName: string]: Schema });

  return {
    name: name,
    description: replaceNewLines(schema.description, '$1 * '),
    properties: properties,
    imports: properties
      .filter(({ isRef }) => isRef)
      .map(({ type }) => type || '')
      .filter((type) => type !== name)
      .concat(extendInterface ? [extendInterface] : [])
      .sort()
      // filter duplicate imports
      .filter((el, i, a) => (i === a.indexOf(el)) ? 1 : 0),
    isEnum: false,
    extend: extendInterface,
    renderFileName: (): RenderFileName => (text: string, render: Render): string => fileName(render(text), 'model'),
  };
}

function determineResponseType(responses: { [responseName: string]: Response }): string {
  if (responses['200'] !== undefined) { // TODO: check non-200 response codes
    const responseSchema = responses['200'].schema;

    if (responseSchema && responseSchema.type) {
      if (responseSchema.type === 'array') {
        const items = responseSchema.items;
        if (!Array.isArray(items)) {
          if (items && items.$ref) {
            return typeName(dereferenceType(items.$ref), true);
          } else if (items) {
            return typeName(items.type, true);
          }
        } else {
          console.warn('Arrays with type diversity are currently not supported, `any[]` will be used instead');
        }
      }
    } else if (responseSchema && responseSchema.$ref) {
      return typeName(dereferenceType(responseSchema.$ref));
    }
  }

  return 'any';
}

function transformParameters(
  parameters: Parameters,
  allParams: Parameters
): Parameter[] {
  return Array.isArray(parameters)
    // todo: required params
    ? parameters.map((param) => {
      const ref = param.$ref || (param.schema && param.schema.$ref) || '';
      const derefName = ref ? dereferenceType(ref) : undefined;
      const paramRef = derefName ? allParams[derefName] : undefined;
      const name = paramRef ? paramRef.name : param.name;
      const isArray = /^array$/i.test(param.type || '');
      const typescriptType = toTypescriptType(isArray
        ? determineArrayType(param)
        : ref
          ? dereferenceType(ref)
          : param.type
      );

      return {
        ...param,
        ...determineParamType(paramRef ? paramRef.in : param.in),

        description: replaceNewLines(param.description, ' '),
        camelCaseName: camelCase(name),
        importType: prefixImportedModels(typescriptType),
        isArray,
        isRequired: !!param.required,
        name,
        typescriptType,
      };
    }
    )
    : [];
}

function determineParamType(paramType: string | undefined): { isBodyParameter?: boolean } |
{ isFormParameter?: boolean } |
{ isHeaderParameter?: boolean } |
{ isPathParameter?: boolean } |
{ isQueryParameter?: boolean } {

  if (!paramType) {
    return {};
  }

  switch (paramType) {
    case 'body':
      return { isBodyParameter: true };
    case 'formData':
      console.warn(`Form parameters are currently unsupported and will not be generated properly`);
      return { isFormParameter: true };
    case 'header':
      return { isHeaderParameter: true };
    case 'path':
      return { isPathParameter: true };
    case 'query' || 'modelbinding':
      return { isQueryParameter: true };
    default:
      console.warn(`Unsupported parameter type  [ ${paramType} ]`);
      return {};
  }
}
