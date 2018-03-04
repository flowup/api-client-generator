import { Response, Schema, Spec as Swagger } from 'swagger-schema-official';
import { Definition, MethodType, MustacheData, Parameter, RenderFileName } from './types';
import { camelCase, dereferenceType, determineDomain, fileName, prefixImportedModels, toTypescriptType, typeName } from './helper';

export function createMustacheViewModel(swagger: Swagger): MustacheData {
  const authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  return {
    description: swagger.info.description || '',
    isSecure: !!swagger.securityDefinitions,
    swagger: swagger,
    domain: determineDomain(swagger),
    methods: [].concat.apply([], Object.entries(swagger.paths)
      .map(
        ([path, api]) => Object.entries(api)
          .filter(([method,]) => authorizedMethods.indexOf(method.toUpperCase()) !== -1)  // skip unsupported methods
          .map(
            ([method, op]) => ({
              path: path.replace(/({.*?})/g, '$$$1'),
              methodName: camelCase(
                op.operationId
                  ? op.operationId
                  : console.error('Method name could not be determined, operationID is undefined')
              ),
              methodType: <MethodType>method.toUpperCase(),
              summaryLines: op.description ? op.description.split('\n') : [], // description summary is optional
              isSecure: swagger.security !== undefined || op.security !== undefined,
              parameters: transformParameters(op.parameters),
              hasJsonResponse: true,
              response: prefixImportedModels(determineResponseType(op.responses)),
            })
          )
      )),
    definitions: parseDefinitions(swagger.definitions)
  }
}

function parseDefinitions(definitions: { [definitionsName: string]: Schema } = {}): Definition[] {
  return Object.entries(definitions).map(([key, definition]) =>
    definition.enum && definition.enum.length !== 0
      ? defineEnum(definition.enum, key)
      : defineInterface(definition, key)
  );
}

function defineEnum(enumSchema: Array<string | boolean | number | {}>, definitionKey: string): Definition {
  return {
    name: typeName(definitionKey),
    properties: enumSchema.map((val) => ({
      name: val.toString(),
    })),
    isEnum: true,
    imports: [],
    renderFileName: (): RenderFileName => ((text: string, render: any): string => fileName(render(text), 'enum')),
  };
}

function defineInterface(schema: Schema, definitionKey: string): Definition {
  const properties: Parameter[] = Object.entries<Schema>(schema.properties || {}).map(
    ([propVal, propIn]: [string, Schema]) => {
      let property: Parameter = {
        name: propVal,
        isRef: '$ref' in propIn || (propIn.type === 'array' && propIn.items && '$ref' in propIn.items),
        isArray: propIn.type === 'array',
      };

      if (Array.isArray(propIn.items)) {
        console.warn('Arrays with type diversity are currently not supported');
        property.type = 'any';

        return property;
      }

      if (property.isArray) {
        if (propIn.items && propIn.items.$ref) {
          property.type = typeName(dereferenceType(propIn.items.$ref));
        } else if (propIn.items && propIn.items.type) {
          property.type = typeName(propIn.items.type);
        } else {
          property.type = propIn.type;
        }
      } else {
        property.type = typeName(
          propIn.$ref
            ? dereferenceType(propIn.$ref)
            : propIn.type
        );
      }

      property.typescriptType = toTypescriptType(property);

      return property;
    }
  )
    .sort((a, b) => a.name && b.name ? a.name.localeCompare(b.name) : -1);

  const name = typeName(definitionKey);

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
    renderFileName: (): RenderFileName => (text: string, render: any): string => fileName(render(text), 'model'),
  };
}

function determineResponseType(responses: { [responseName: string]: Response }): string {
  if (responses['200'] !== undefined) { //TODO: check non-200 response codes
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

function transformParameters(parameters: Parameter[]): Parameter[] {
  return Array.isArray(parameters)
    // todo: required params
    ? parameters.map((param) => {
        const parameter = {...param};

        if ('schema' in param && typeof param.schema.$ref === 'string') {
          parameter.type = camelCase(dereferenceType(param.schema.$ref));
        }

        parameter.camelCaseName = camelCase(param.name);
        parameter.typescriptType = toTypescriptType(parameter);
        parameter.importType = prefixImportedModels(parameter.typescriptType);

        if (param.in === 'body') {
          parameter.isBodyParameter = true;
        } else if (param.in === 'path') {
          // param is included in method path string interpolation
          parameter.isPathParameter = true;
        } else if (param.in === 'query' || param.in === 'modelbinding') {
          parameter.isQueryParameter = true;
        } else if (param.in === 'header') {
          parameter.isHeaderParameter = true;
        } else if (param.in === 'formData') {
          parameter.isFormParameter = true; // TODO: currently unsupported
          console.warn(`Form parameters are currently unsupported and will not be generated properly    [ ${param.name} ]`);
        }

        return parameter;
      }
    )
    : [];
}
