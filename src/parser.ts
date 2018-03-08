import { BodyParameter, QueryParameter, Response, Schema, Spec as Swagger } from 'swagger-schema-official';
import { Definition, Method, MethodType, MustacheData, Parameter, Property, Render, RenderFileName } from './types';
import { camelCase, dereferenceType, determineDomain, fileName, prefixImportedModels, toTypescriptType, typeName } from './helper';

interface Parameters {
  [parameterName: string]: BodyParameter | QueryParameter
}

interface ExtendedParameters {
  [parameterName: string]: (BodyParameter | QueryParameter) & { 'enum': (string | boolean | number | {})[] }
}

interface Definitions {
  [definitionsName: string]: Schema
}

export function createMustacheViewModel(swagger: Swagger): MustacheData {
  return {
    description: swagger.info.description || '',
    isSecure: !!swagger.securityDefinitions,
    swagger: swagger,
    domain: determineDomain(swagger),
    methods: parseMethods(swagger),
    definitions: parseDefinitions(swagger.definitions, swagger.parameters)
  };
}

function parseMethods({paths, security, parameters}: Swagger): Method[] {
  const authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

  return [].concat.apply([], Object.entries(paths)
    .map(([pathName, apiPath]) => Object.entries(apiPath)
      .filter(([methodType,]) => authorizedMethods.indexOf(methodType.toUpperCase()) !== -1)  // skip unsupported methods
      .map(([methodType, operation]) => ({
          path: pathName.replace(/({.*?})/g, '$$$1'),
          methodName: camelCase(
            operation.operationId
              ? operation.operationId
              : console.error(`Method name could not be determined, path will be used instead of operation id   [ ${pathName} ]`)
          ),
          methodType: methodType.toUpperCase() as MethodType,
          summaryLines: operation.description ? operation.description.split('\n') : [], // description summary is optional
          isSecure: security !== undefined || operation.security !== undefined,
          parameters: transformParameters(operation.parameters, parameters || {}),
          hasJsonResponse: true,
          response: prefixImportedModels(determineResponseType(operation.responses)),
        })
      )
    ));
}

function parseDefinitions(
  definitions: Definitions = {},
  parameters: Parameters = {},
): Definition[] {
  return Object.entries({
    ...definitions,
    ...(parameters as ExtendedParameters),  // type cast because of wrong typing in BaseParameter (should contain enum property)
  }).map(([key, definition]) =>
    definition.enum && definition.enum.length !== 0
      ? defineEnum(definition.enum, key)
      : defineInterface(('schema' in definition ? definition.schema : definition) || {}, key)
  );
}

function defineEnum(enumSchema: (string | boolean | number | {})[] = [], definitionKey: string): Definition {
  return {
    name: typeName(definitionKey),
    properties: enumSchema && enumSchema.map((val) => ({
      name: val.toString(),
    })),
    isEnum: true,
    imports: [],
    renderFileName: (): RenderFileName => (text: string, render: Render): string => fileName(render(text), 'enum'),
  };
}

function parseInterfaceProperties(properties: { [propertyName: string]: Schema } = {}): Property[] {
  return Object.entries<Schema>(properties).map(
    ([propName, propSchema]: [string, Schema]) => {
      const property: Property = {
        name: propName,
        isRef: '$ref' in propSchema || (propSchema.type === 'array' && propSchema.items && '$ref' in propSchema.items),
        isArray: propSchema.type === 'array',
      };

      if (Array.isArray(propSchema.items)) {
        console.warn('Arrays with type diversity are currently not supported');
        property.type = 'any';

        return property;
      }

      if (property.isArray) {
        if (propSchema.items && propSchema.items.$ref) {
          property.type = typeName(dereferenceType(propSchema.items.$ref));
        } else if (propSchema.items && propSchema.items.type) {
          property.type = typeName(propSchema.items.type);
        } else {
          property.type = propSchema.type;
        }
      } else {
        property.type = typeName(
          propSchema.$ref
            ? dereferenceType(propSchema.$ref)
            : propSchema.type
        );
      }

      property.typescriptType = toTypescriptType(property.type, property.items);

      return property;
    }
  ).sort((a, b) => a.name && b.name ? a.name.localeCompare(b.name) : -1);
}

function defineInterface(schema: Schema, definitionKey: string): Definition {
  const name = typeName(definitionKey);
  const properties: Property[] = parseInterfaceProperties(schema.properties);

  return {
    name: name,
    properties: properties,
    imports: properties
      .filter(({isRef}) => isRef)
      .map(({type}) => type || '')
      .filter((type) => type !== name)
      .sort()
      // filter duplicate imports
      .filter((el, i, a) => (i === a.indexOf(el)) ? 1 : 0),
    isEnum: false,
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
  parameters: Parameter[],
  swaggerParams: Parameters
): Parameter[] {
  return Array.isArray(parameters)
    // todo: required params
    ? parameters.map((param) => {
        // console.log('==>', param);

        const ref = param.$ref || (param.schema && param.schema.$ref) || '';
        const derefName = dereferenceType(ref);
        const paramRef = swaggerParams[derefName];
        const name = paramRef ? paramRef.name : param.name;
        const typescriptType = toTypescriptType(
          ref ? derefName : param.type,
          param.items
        );

        return {
          ...param,
          ...determineParamType(paramRef ? paramRef.in : param.in),

          camelCaseName: camelCase(name),
          importType: prefixImportedModels(typescriptType),
          name,
          typescriptType,
        };
      }
    )
    : [];
}

function determineParamType(paramType: string | undefined):
  { isBodyParameter?: boolean } |
  { isFormParameter?: boolean } |
  { isHeaderParameter?: boolean } |
  { isPathParameter?: boolean } |
  { isQueryParameter?: boolean } {

  if (!paramType) {
    return {};
  }

  switch (paramType) {
    case 'body':
      return {isBodyParameter: true};
    case 'formData':
      console.warn(`Form parameters are currently unsupported and will not be generated properly`);
      return {isFormParameter: true};
    case 'header':
      return {isHeaderParameter: true};
    case 'path':
      return {isPathParameter: true};
    case 'query' || 'modelbinding':
      return {isQueryParameter: true};
    default:
      console.warn(`Unsupported parameter type  [ ${paramType} ]`);
      return {};
  }
}