import { OpenAPIV2 } from 'openapi-types';
import { GLOBAL_OPTIONS } from './main';
import {
  Definition,
  Method,
  MethodType,
  TemplateData,
  Parameter,
  ParsedSchema,
  ParseSchemaMetadata,
  Property,
} from './types';
import {
  toCamelCase,
  dereferenceType,
  fileName,
  replaceNewLines,
  typeName,
  logWarn,
  compareStringByKey,
  ADDITIONAL_PROPERTIES_KEY,
  accessProp,
  guardOptional,
  guardArray,
  guardDictionary,
  unicodeEscape,
  createDocsComment,
} from './helper';

interface ExtendedParameters {
  [parameterName: string]: ExtendedParameter;
}

type ExtendedParameter = OpenAPIV2.Parameter & {
  enum?: EnumType;
  type?: 'string' | 'integer';
  'x-enumNames'?: string[];
  'x-deprecated'?: boolean;
  $ref?: string;
};

interface Definitions {
  [definitionsName: string]: OpenAPIV2.Schema;
}

type EnumType = string[] | number[] | boolean[] | {}[];

export function createTemplateViewModel(
  swagger: OpenAPIV2.Document,
  swaggerTag?: string,
): TemplateData {
  const methods = parseMethods(swagger, swaggerTag);
  const camelSwaggerTag = toCamelCase(swaggerTag, false) || '';
  return {
    isSecure: !!swagger.securityDefinitions,
    swaggerTag,
    domain: determineDomain(swagger),
    methods: methods,
    definitions: parseDefinitions(
      swagger.definitions,
      swagger.parameters,
      swaggerTag ? methods : undefined,
    ),
    serviceTag: camelSwaggerTag,
    serviceName: `${camelSwaggerTag}APIClient`,
    serviceFileName: fileName(`${camelSwaggerTag}APIClient`, 'service'),
    interfaceName: `${camelSwaggerTag}APIClientInterface`,
    interfaceFileName: fileName(`${camelSwaggerTag}APIClient`, 'interface'),
  };
}

export function determineDomain({
  schemes,
  host,
  basePath,
}: OpenAPIV2.Document): string {
  // if the host definition exists then try to use a protocol from the swagger file
  // otherwise, use the current protocol of loaded app
  // prefer https protocol
  const protocol =
    host && schemes && schemes.length > 0
      ? `${schemes.find(scheme => scheme === 'https') || schemes[0]}://`
      : '//';

  // if no host exists in the swagger file use a window location relative path
  const domain = host
    ? host // tslint:disable-next-line:no-invalid-template-strings
    : "${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}";
  const base = '/' === basePath || !basePath ? '' : basePath;
  return `${protocol}${domain}${base}`;
}

function parseMethods(
  { paths, parameters, responses = {} }: Readonly<OpenAPIV2.Document>,
  swaggerTag?: string,
): Method[] {
  const supportedMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
  ];

  return ([] as Method[]).concat(
    ...Object.entries<OpenAPIV2.PathItemObject>(paths).map(
      ([pathName, pathDef]) =>
        Object.entries(pathDef)
          .filter(
            ([methodType, operation]) =>
              supportedMethods.indexOf(methodType?.toUpperCase()) !== -1 && // skip unsupported methods
              (!swaggerTag ||
                (operation &&
                  'tags' in operation &&
                  operation.tags.includes(swaggerTag))), // if tag exists take only paths including this tag
          )
          .map(([methodType, operation]) => {
            // select the lowest success (code 20x) response
            const successResponseCode =
              ('responses' in operation &&
                Object.keys(operation.responses)
                  .slice()
                  .sort()
                  .filter(code => code.startsWith('2'))[0]) ||
              'default';

            const okResponse = operation.responses[successResponseCode];

            const responseTypeSchema = determineResponseType(
              okResponse && '$ref' in okResponse
                ? responses[dereferenceType(okResponse.$ref)]
                : okResponse,
            );

            const transformedParams = transformParameters(
              [...(pathDef.parameters || []), ...(operation.parameters || [])],
              parameters || {},
            );

            const methodTypeLowered = methodType.toLowerCase() as MethodType;
            const formData = transformedParams
              .filter(({ name, isFormParameter }) => name && isFormParameter)
              .map(({ name, camelCaseName }) => ({
                name,
                camelCaseName: camelCaseName || name,
              }));
            const stringifyBody = (param?: Parameter) =>
              param ? `JSON.stringify(args.${param.camelCaseName})` : 'null';
            const body = /^(?:post|put|patch)\b/.test(methodTypeLowered)
              ? formData.length
                ? 'formData'
                : stringifyBody(
                    transformedParams.find(
                      ({ isBodyParameter }) => isBodyParameter,
                    ),
                  )
              : undefined;

            return {
              hasJsonResponse: true,
              methodName: toCamelCase(
                operation.operationId
                  ? !swaggerTag
                    ? operation.operationId
                    : operation.operationId.replace(`${swaggerTag}_`, '')
                  : `${methodTypeLowered}_${pathName.replace(/[{}]/g, '')}`,
              ),
              methodType: methodTypeLowered,
              body,
              parameters: transformedParams,
              paramsOptional: transformedParams.every(
                ({ isRequired }) => !isRequired,
              ),
              formData,
              // turn path interpolation `{this}` into string template `${args.this}
              path: pathName.replace(
                /{(.*?)}/g,
                (_: string, ...args: string[]): string =>
                  `\${args.${toCamelCase(args[0])}}`,
              ),
              responseGuard: responseTypeSchema.guard?.('response'),
              description: createDocsComment(
                [
                  operation.summary,
                  operation.description,
                  operation.deprecated
                    ? `@deprecated this method has been deprecated and may be removed in future.`
                    : null,
                  `Response generated for [ ${successResponseCode} ] HTTP response code.`,
                ]
                  .filter(str => !!str)
                  .join('\n'),
                2,
                true,
              ),
              responseTypeSchema,
              ...(responseTypeSchema.type === 'File' && {
                requestResponseType: 'blob' as 'blob',
              }),
            };
          }),
    ),
  );
}

function parseDefinitions(
  definitions: Definitions = {},
  params: OpenAPIV2.ParametersDefinitionsObject = {},
  tagMethods?: Method[], // methods tagged with tag that is currently generated
): Definition[] {
  const allDefs = [
    ...Object.entries(definitions).map(([key, definition]) =>
      defineEnumOrInterface(key, definition),
    ),

    ...Object.entries(
      params as ExtendedParameters, // type cast because of wrong typing in BaseParameter (should contain enum property)
    )
      .filter(
        ([, definition]) =>
          (definition.enum && definition.enum.length !== 0) ||
          ('schema' in definition && definition.schema),
      )
      .map(([key, definition]) => defineEnumOrInterface(key, definition)),
  ];

  // only filter definitions used byt "tagged" methods if tag methods are provided, else return all definitions
  if (tagMethods) {
    const filterByName = (
      defName: string,
      parentDefs: Definition[] = [],
    ): Definition[] => {
      const namedDefs = allDefs.filter(
        ({ definitionName }) => definitionName === defName,
      );

      return [
        ...namedDefs,
        ...namedDefs.flatMap(def => [
          ...def.properties.flatMap(prop =>
            // check if every import has already been included in definitions
            prop.parsedSchema?.imports.every(importType =>
              parentDefs.some(
                ({ definitionName }) => definitionName === importType,
              ),
            )
              ? [] // do not parse if type (import) def already exists in parsed definitions
              : prop.parsedSchema?.imports.flatMap(name =>
                  filterByName(name, [...parentDefs, ...namedDefs]),
                ) || [],
          ),
        ]),
      ];
    };

    // find reference definitions for all parameters of the method and its response type
    return tagMethods.flatMap(({ parameters, responseTypeSchema }) => [
      ...parameters.flatMap(
        ({ parsedSchema }) =>
          parsedSchema?.imports.flatMap(name => filterByName(name)) || [],
      ),
      ...responseTypeSchema.imports.flatMap(name => filterByName(name)),
    ]);
  }

  return allDefs;
}

function defineEnumOrInterface(
  key: string,
  definition: OpenAPIV2.SchemaObject | ExtendedParameter,
): Definition {
  return definition.enum && definition.enum.length !== 0
    ? defineEnum(
        definition.enum,
        key,
        definition.type === 'integer',
        definition.description,
        (definition as ExtendedParameter)['x-enumNames'],
      )
    : defineInterface(
        'schema' in definition
          ? definition.schema!
          : (definition as OpenAPIV2.SchemaObject),
        key,
      );
}

function defineEnum(
  enumSchema: (string | boolean | number | {})[] = [],
  definitionKey: string,
  isNumeric: boolean = false,
  enumDesc: string = '',
  xEnumNames: string[] = [],
): Definition {
  const splitDesc = enumDesc.split('\n');
  const descKeys: { [key: string]: string } | null =
    splitDesc.length > 1
      ? splitDesc.reduce<{ [key: string]: string }>((acc, cur) => {
          const [, key, value] = /(\d) (\w+)/.exec(cur) || []; // parse the `- 42 UltimateAnswer` description syntax
          return key ? { ...acc, [key]: value } : acc;
        }, {})
      : null;

  const definitionName = typeName(definitionKey);

  return {
    definitionName,
    properties:
      enumSchema &&
      enumSchema.map((val, index) => ({
        name: (isNumeric
          ? xEnumNames.length === 0 && descKeys
            ? descKeys[val.toString()] || ''
            : xEnumNames[index] || `${val}`
          : val.toString()
        ).replace(/[\W\s]+/, '_'),
        value: val.toString(),
      })),
    description: replaceNewLines(enumDesc, '$1 * '),
    isEnum: true,
    isNumeric,
    imports: [],
    fileName: fileName(definitionName, 'enum'),
  };
}

function parseInterfaceProperties(
  properties: { [propertyName: string]: OpenAPIV2.SchemaObject } = {},
  requiredProps: string[] = [],
): Property[] {
  return Object.entries<OpenAPIV2.SchemaObject>(properties)
    .map(([propName, propSchema]: [string, OpenAPIV2.SchemaObject]) => {
      const name =
        /^[A-Za-z_$][\w$]*$/.test(propName) ||
        propName === ADDITIONAL_PROPERTIES_KEY // todo: check if this is needed here
          ? propName
          : `'${propName}'`;

      const propertyAllOf = propSchema.allOf?.length
        ? propSchema.allOf.map(allOfItemSchema =>
            parseSchema(allOfItemSchema as OpenAPIV2.SchemaObject, {
              name: accessProp(name),
              isRequired: true,
            }),
          )
        : [];

      const isRequired = requiredProps.includes(propName);

      const parsedSchema = parseSchema(propSchema, {
        name: name === ADDITIONAL_PROPERTIES_KEY ? 'value' : accessProp(name),
        isRequired,
      });

      const property: Property = {
        parsedSchema,
        isRequired,
        name: unicodeEscape(name),
        description: createDocsComment(
          [
            propSchema.description,
            // tslint:disable-next-line:no-any
            (propSchema as any)['x-deprecated'] ||
            propSchema.title?.includes('deprecated')
              ? `@deprecated this property has been deprecated and may be removed in future.`
              : null,
          ]
            .filter(str => str != null)
            .join('\n'),
          2,
        ),
        type: propertyAllOf.length
          ? propertyAllOf
              .map(({ type }) => type)
              .filter((type): type is string => !!type)
              .join(' & ')
          : parsedSchema.type,
        imports: propertyAllOf.reduce(
          (allImports, { imports }) => [...imports, ...allImports],
          parsedSchema.imports,
        ),
      };

      const propGuard = GLOBAL_OPTIONS.skipGuards
        ? undefined
        : propertyAllOf.length
        ? guardOptional(
            accessProp(name),
            false,
            () =>
              `( ${propertyAllOf
                .map(({ guard }) => guard?.('this can be anything'))
                .filter((type): type is string => !!type)
                .join(' && ')} )`,
          )
        : parsedSchema.guard?.('this can be anything') || ''; // todo: check the typing on the guards as the name probably should not be passed here (it does not seem to have any effect)

      return {
        ...property,
        guard: GLOBAL_OPTIONS.skipGuards
          ? undefined
          : name === ADDITIONAL_PROPERTIES_KEY
          ? guardDictionary('arg', () => propGuard)
          : propGuard,
      };
    })
    .sort(compareStringByKey('name')); // tslint:disable-line:no-array-mutation
}

function parseSchema(
  property: OpenAPIV2.SchemaObject,
  {
    name,
    isRequired,
    prefixGuards,
  }: ParseSchemaMetadata & { prefixGuards?: boolean },
): ParsedSchema {
  if (Array.isArray(property.items)) {
    logWarn('Arrays with type diversity are currently not supported');
    return { type: 'any', imports: [] };
  }

  if ('enum' in property) {
    const enumValues =
      property.type === 'number'
        ? property.enum || []
        : (property.enum || []).map(str => `'${str}'`);

    return {
      type: `(${enumValues.join(' | ')})`,
      imports: [],
      guard: GLOBAL_OPTIONS.skipGuards
        ? undefined
        : () =>
            guardOptional(
              name,
              isRequired,
              (iterName: string) =>
                `[${enumValues.join(', ')}].includes(${iterName})`,
            ),
    };
  }

  if (property.properties) {
    return {
      type: 'object',
      imports: [],
      guard: GLOBAL_OPTIONS.skipGuards
        ? undefined
        : () =>
            guardOptional(
              name,
              isRequired,
              (iterName: string) => `typeof ${iterName} === 'object'`,
            ),
    }; // type occurrence of inlined properties as object instead of any (TODO: consider supporting inlined properties)
  }

  if (property.$ref) {
    const refType = typeName(dereferenceType(property.$ref));

    return {
      type: refType,
      imports: [refType],
      guard: GLOBAL_OPTIONS.skipGuards
        ? undefined
        : () =>
            guardOptional(
              name,
              isRequired,
              (iterName: string) =>
                `${prefixGuards ? 'guards.' : ''}is${refType}(${iterName})`,
            ),
    };
  }

  if (property.items) {
    const parsedArrayItemsSchema = parseSchema(property.items, {
      name: 'item',
      isRequired: true,
      prefixGuards,
    });

    return {
      type: `${parsedArrayItemsSchema.type}[]`,
      imports: parsedArrayItemsSchema.imports,
      guard:
        GLOBAL_OPTIONS.skipGuards || !parsedArrayItemsSchema.guard
          ? undefined
          : () =>
              guardOptional(name, isRequired, (iterName: string) =>
                guardArray(iterName, parsedArrayItemsSchema.guard!),
              ),
    };
  }

  if (property.additionalProperties) {
    const parsedDictionarySchema = parseSchema(
      property.additionalProperties as OpenAPIV2.SchemaObject,
      { name: 'value', isRequired: true, prefixGuards },
    );

    const isJustObject = parsedDictionarySchema.type === 'any'; // skip complicated dictionary type and guard if simple object

    return {
      type: isJustObject
        ? 'object'
        : `{ ${ADDITIONAL_PROPERTIES_KEY}: ${parsedDictionarySchema.type} }`,
      imports: parsedDictionarySchema.imports,
      guard:
        GLOBAL_OPTIONS.skipGuards || !parsedDictionarySchema.guard
          ? undefined
          : () =>
              guardOptional(name, isRequired, (iterName: string) =>
                isJustObject
                  ? `typeof ${iterName} === 'object'`
                  : guardDictionary(iterName, parsedDictionarySchema.guard!),
              ),
    };
  }

  // fixme: type casting to string here (can be causing problems if type is an array of types)
  const type = typeName(property.type as string);

  return {
    type,
    imports: [],
    guard: GLOBAL_OPTIONS.skipGuards
      ? undefined
      : () =>
          type === 'any'
            ? ''
            : guardOptional(name, isRequired, (iterName: string) =>
                type === 'File'
                  ? `${iterName} instanceof File`
                  : `typeof ${iterName} === '${type}'`,
              ),
  };
}

function defineInterface(
  schema: OpenAPIV2.SchemaObject,
  definitionKey: string,
): Definition {
  const name = typeName(definitionKey);
  const extendInterface: string | undefined = schema.allOf
    ? toCamelCase(
        dereferenceType(
          ((schema.allOf.find(allOfSchema => '$ref' in allOfSchema) || {
            $ref: '',
            // tslint:disable-next-line:no-any
          }) as any)['$ref'],
        ),
        false,
      )
    : undefined;
  const allOfProps = schema.allOf
    ? schema.allOf.reduce(
        (props, allOfSchema) => ({ ...props, ...allOfSchema.properties }),
        {},
      )
    : {};
  const properties: Property[] = parseInterfaceProperties(
    {
      ...(schema.additionalProperties
        ? { [ADDITIONAL_PROPERTIES_KEY]: schema.additionalProperties }
        : schema.properties),
      ...(!schema.additionalProperties && allOfProps),
    } as { [propertyName: string]: OpenAPIV2.SchemaObject },
    [...(schema.required || []), ADDITIONAL_PROPERTIES_KEY],
  );

  const modelImports = properties
    .reduce(
      (acc, { imports = [] }) => [...acc, ...imports],
      extendInterface ? [extendInterface] : [],
    )
    .filter(type => type !== name)
    .sort() // tslint:disable-line:no-array-mutation
    // filter duplicate imports
    .filter((el, i, a) => (i === a.indexOf(el) ? 1 : 0));

  return {
    definitionName: name,
    description: replaceNewLines(schema.description, '$1 * '),
    properties: properties,
    imports: modelImports,
    isEnum: false,
    extend: extendInterface,
    fileName: fileName(name, 'model'),
  };
}

function determineResponseType(
  response: OpenAPIV2.ResponseObject,
): ParsedSchema {
  if (response == null) {
    return { type: 'void', imports: [] };
  }

  const { schema } = response;

  if (schema == null) {
    return { type: 'void', imports: [] };
  }

  const nullable =
    (schema as OpenAPIV2.Schema & { 'x-nullable'?: boolean })['x-nullable'] ||
    false;
  const responseSchema = parseSchema(schema, {
    name: 'res',
    isRequired: true,
    prefixGuards: true,
  });

  const type = prefixTypeBasedOnImports(
    responseSchema.type,
    responseSchema.imports,
  );

  return {
    ...responseSchema,
    type: nullable ? `(${type}) | null` : type,
    guard: GLOBAL_OPTIONS.skipGuards
      ? undefined
      : () =>
          nullable
            ? `(res == null || ${responseSchema.guard?.('')})`
            : responseSchema.guard?.('') || '',
  };
}

/**
 * iterate over imports and find them in the response, prefix each type that needs to be imported
 * @param type
 * @param imports
 */
function prefixTypeBasedOnImports(type: string, imports: string[]): string {
  return imports.reduce(
    (prefixedType, tokenToPrefix) =>
      prefixedType.split(tokenToPrefix).join(`models.${tokenToPrefix}`),
    type,
  );
}

function transformParameters(
  parameters: ExtendedParameter[],
  allParams: OpenAPIV2.ParametersDefinitionsObject,
): Parameter[] {
  return parameters.map((param: ExtendedParameter) => {
    const derefName = param.$ref ? dereferenceType(param.$ref) : undefined;
    const derefParam = derefName ? allParams[derefName] : param;
    const name = derefParam?.name || '';

    const parsedSchema = parseSchema(
      // tslint:disable-next-line:no-any
      param.$ref &&
        ('enum' in derefParam ||
          ('schema' in derefParam && derefParam.schema?.type === 'object'))
        ? param
        : derefParam.in === 'body' && derefParam.schema
        ? derefParam.schema
        : // fixme: Schema should be there but "body" param seems to be off
          // tslint:disable-next-line:no-any
          (derefParam as any),

      {
        name,
        isRequired: derefParam.required,
        prefixGuards: true,
      },
    );

    const type = prefixTypeBasedOnImports(
      parsedSchema.type,
      parsedSchema.imports,
    );

    return {
      ...determineParamType(derefParam.in),

      description: createDocsComment(
        [
          derefParam?.description,
          'default' in derefParam && derefParam.default
            ? `If not set, server will use the default value: ${derefParam.default}`
            : null,
          ('x-deprecated' in derefParam && derefParam['x-deprecated']) ||
          derefParam.description?.includes('deprecated')
            ? `@deprecated this parameter has been deprecated and may be removed in future.`
            : null,
        ]
          .filter(str => !!str)
          .join('\n'),
        // tslint:disable-next-line:no-magic-numbers
        4,
      ),
      camelCaseName: toCamelCase(name),
      isRequired: derefParam.required,
      name,
      type,
      parsedSchema: { ...parsedSchema, type },
    };
  });
}

function determineParamType(
  paramType: string | undefined,
):
  | { isBodyParameter?: boolean }
  | { isFormParameter?: boolean }
  | { isHeaderParameter?: boolean }
  | { isPathParameter?: boolean }
  | { isQueryParameter?: boolean } {
  if (!paramType) {
    return {};
  }

  switch (paramType) {
    case 'body':
      return { isBodyParameter: true };
    case 'formData':
      return { isFormParameter: true };
    case 'header':
      return { isHeaderParameter: true };
    case 'path':
      return { isPathParameter: true };
    case 'query' || 'modelbinding':
      return { isQueryParameter: true };
    default:
      logWarn(`Unsupported parameter type [ ${paramType} ]`);
      return {};
  }
}
