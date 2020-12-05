import {
  Operation,
  Path,
  Response,
  Schema,
  Spec as Swagger,
  Parameter as SwaggerParameter,
  Reference,
} from 'swagger-schema-official';
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
  BASIC_TS_TYPE_REGEX,
  toCamelCase,
  dereferenceType,
  fileName,
  replaceNewLines,
  typeName,
  logWarn,
  compareStringByKey,
  ADDITIONAL_PROPERTIES_KEY,
  importableType,
  accessProp,
  guardOptional,
  guardArray,
  guardDictionary,
} from './helper';

interface Parameters {
  [parameterName: string]: SwaggerParameter;
}

interface ExtendedParameters {
  [parameterName: string]: ExtendedParameter;
}

type ExtendedParameter = SwaggerParameter & {
  enum?: EnumType;
  type?: 'string' | 'integer';
  'x-enumNames'?: string[];
};

interface Definitions {
  [definitionsName: string]: Schema;
}

type EnumType = string[] | number[] | boolean[] | {}[];

type ExtendedSwaggerParam = Parameter | Reference;

export function createTemplateViewModel(
  swagger: Swagger,
  swaggerTag?: string,
): TemplateData {
  const methods = parseMethods(swagger, swaggerTag);
  const camelSwaggerTag = toCamelCase(swaggerTag, false) || '';
  return {
    isSecure: !!swagger.securityDefinitions,
    swagger: swagger,
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

export function determineDomain({ schemes, host, basePath }: Swagger): string {
  // if the host definition exists then try to use a protocol from the swagger file
  // otherwise, use the current protocol of loaded app
  const protocol =
    host && schemes && schemes.length > 0 ? `${schemes[0]}://` : '//';

  // if no host exists in the swagger file use a window location relative path
  const domain = host
    ? host // tslint:disable-next-line:no-invalid-template-strings
    : "${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}";
  const base = '/' === basePath || !basePath ? '' : basePath;
  return `${protocol}${domain}${base}`;
}

function parseMethods(
  { paths, parameters, responses = {} }: Swagger,
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
    ...Object.entries(paths).map(([pathName, pathDef]: [string, Path]) =>
      Object.entries(pathDef)
        .filter(([methodType, operation]) => {
          const op = <Operation>operation;
          return (
            supportedMethods.indexOf(methodType.toUpperCase()) !== -1 && // skip unsupported methods
            (!swaggerTag || (op.tags && op.tags.includes(swaggerTag)))
          ); // if tag exists take only paths including this tag
        })
        .map(([methodType, operation]: [string, Operation]) => {
          // select the lowest success (code 20x) response
          const successResponseCode =
            Object.keys(operation.responses)
              .slice()
              .sort()
              .filter(code => code.startsWith('2'))[0] || 'missing';

          const okResponse: Response | Reference | undefined =
            operation.responses[successResponseCode];

          const responseTypeSchema = determineResponseType(
            okResponse && '$ref' in okResponse
              ? responses[dereferenceType(okResponse.$ref)]
              : okResponse,
          );

          const transformedParams = transformParameters(
            [...(pathDef.parameters || []), ...(operation.parameters || [])],
            parameters || {},
          );

          return {
            hasJsonResponse: true,
            methodName: toCamelCase(
              operation.operationId
                ? !swaggerTag
                  ? operation.operationId
                  : operation.operationId.replace(`${swaggerTag}_`, '')
                : `${methodType}_${pathName.replace(/[{}]/g, '')}`,
            ),
            methodType: methodType.toUpperCase() as MethodType,
            parameters: transformedParams,
            formData: transformedParams
              .filter(({ name, isFormParameter }) => name && isFormParameter)
              .map(({ name, camelCaseName }) => ({
                name: name,
                camelCaseName: camelCaseName || name,
              })),
            // turn path interpolation `{this}` into string template `${args.this}
            path: pathName.replace(
              /{(.*?)}/g,
              (_: string, ...args: string[]): string =>
                `\${args.${toCamelCase(args[0])}}`,
            ),
            responseGuard: responseTypeSchema.guard?.('response'),
            description: `${replaceNewLines(operation.description, '$1   * ')}${
              operation.description ? '\n   * ' : ''
            }Response generated for [ ${successResponseCode} ] HTTP response code.`,
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
  parameters: Parameters = {},
  methods?: Method[],
): Definition[] {
  const allDefs = [
    ...Object.entries(definitions).map(([key, definition]) =>
      defineEnumOrInterface(key, definition),
    ),

    ...Object.entries(
      parameters as ExtendedParameters, // type cast because of wrong typing in BaseParameter (should contain enum property)
    )
      .filter(
        ([, definition]) =>
          (definition.enum && definition.enum.length !== 0) ||
          ('schema' in definition && definition.schema),
      )
      .map(([key, definition]) => defineEnumOrInterface(key, definition)),
  ];

  if (methods) {
    const filterByName = (
      defName: string,
      parentDefs: Definition[] = [],
    ): Definition[] => {
      const namedDefs = allDefs.filter(
        ({ definitionName }) => definitionName === defName,
      );
      return namedDefs.reduce<Definition[]>(
        (acc, def) => [
          ...acc,
          ...def.properties
            .filter(prop => prop.typescriptType && prop.isRef)
            .reduce<Definition[]>(
              (a, prop) =>
                parentDefs.some(
                  ({ definitionName }) =>
                    definitionName === prop.typescriptType,
                )
                  ? a // do not parse if type def already exists in parsed definitions
                  : [
                      ...a,
                      ...filterByName(prop.typescriptType!, [
                        ...parentDefs,
                        ...namedDefs,
                      ]),
                    ],
              [],
            ),
        ],
        namedDefs,
      );
    };

    return methods.reduce<Definition[]>(
      (acc, method) => [
        ...acc,
        ...method.parameters.reduce(
          (a, param) => [
            ...a,
            ...filterByName(toCamelCase(param.typescriptType, false)),
          ],
          filterByName(
            toCamelCase(
              // FIXME: think of better solution to get rid of syntax from name
              method.response
                ?.replace('[]', '')
                .replace('{ [key: string]: ', '')
                .replace('}', '')
                .replace('models.', '')
                .trim(),
              false,
            ),
          ),
        ),
      ],
      [],
    );
  }

  return allDefs;
}

function defineEnumOrInterface(
  key: string,
  definition: Schema | ExtendedParameter,
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
        'schema' in definition ? definition.schema! : (definition as Schema),
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
  properties: { [propertyName: string]: Schema } = {},
  requiredProps: string[] = [],
): Property[] {
  return Object.entries<Schema>(properties)
    .map(([propName, propSchema]: [string, Schema]) => {
      const name =
        /^[A-Za-z_$][\w$]*$/.test(propName) ||
        propName === ADDITIONAL_PROPERTIES_KEY // todo: check if this is needed here
          ? propName
          : `'${propName}'`;

      const propertyAllOf = propSchema.allOf?.length
        ? propSchema.allOf.map(allOfItemSchema =>
            parseSchema(allOfItemSchema, false, {
              name: accessProp(name),
              isRequired: true,
            }),
          )
        : [];

      const isRequired = requiredProps.includes(propName);

      const parsedSchema = parseSchema(propSchema, false, {
        name: name === ADDITIONAL_PROPERTIES_KEY ? 'value' : accessProp(name),
        isRequired,
      });

      const property: Property = {
        parsedSchema,
        isPrimitiveType: BASIC_TS_TYPE_REGEX.test(parsedSchema.type), // TODO: check if this is needed with guards refactored
        isRequired,
        name,
        description: replaceNewLines(propSchema.description),
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

      const guard = propertyAllOf.length
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
        guard:
          name === ADDITIONAL_PROPERTIES_KEY
            ? guardDictionary('arg', () => guard)
            : guard,
      };
    })
    .sort(compareStringByKey('name')); // tslint:disable-line:no-array-mutation
}

function parseSchema(
  property: Schema,
  skipGuards: boolean,
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
      guard: skipGuards
        ? undefined
        : () =>
            guardOptional(
              name,
              isRequired,
              (name: string) => `[${enumValues.join(', ')}].includes(${name})`,
            ),
    };
  }

  if (property.properties) {
    return {
      type: 'object',
      imports: [],
      guard: () =>
        guardOptional(
          name,
          isRequired,
          (name: string) => `typeof ${name} === 'object'`,
        ),
    }; // type occurrence of inlined properties as object instead of any (TODO: consider supporting inlined properties)
  }

  if (property.$ref) {
    const refType = typeName(dereferenceType(property.$ref));

    return {
      type: refType,
      imports: [refType],
      guard: skipGuards
        ? undefined
        : () =>
            guardOptional(
              name,
              isRequired,
              (name: string) =>
                `${prefixGuards ? 'guards.' : ''}is${refType}(${name})`,
            ),
    };
  }

  if (property.items) {
    const parsedArrayItemsSchema = parseSchema(
      property.items as Schema,
      skipGuards,
      {
        name: 'item',
        isRequired: true,
        prefixGuards,
      },
    );

    return {
      type: `${parsedArrayItemsSchema.type}[]`,
      imports: parsedArrayItemsSchema.imports,
      guard:
        skipGuards || !parsedArrayItemsSchema.guard
          ? undefined
          : () =>
              guardOptional(name, isRequired, (name: string) =>
                guardArray(name, parsedArrayItemsSchema.guard!),
              ),
    };
  }

  if (property.additionalProperties) {
    const parsedDictionarySchema = parseSchema(
      property.additionalProperties as Schema,
      skipGuards,
      { name: 'value', isRequired: true, prefixGuards },
    );

    const isJustObject = parsedDictionarySchema.type === 'any'; // skip complicated dictionary type and guard if simple object

    return {
      type: isJustObject
        ? 'object'
        : `{ ${ADDITIONAL_PROPERTIES_KEY}: ${parsedDictionarySchema.type} }`,
      imports: parsedDictionarySchema.imports,
      guard:
        skipGuards || !parsedDictionarySchema.guard
          ? undefined
          : () =>
              guardOptional(name, isRequired, (name: string) =>
                isJustObject
                  ? `typeof ${name} === 'object'`
                  : guardDictionary(name, parsedDictionarySchema.guard!),
              ),
    };
  }

  const type = typeName(property.type);

  return {
    type,
    imports: [],
    guard: skipGuards
      ? undefined
      : () =>
          type === 'any'
            ? ''
            : guardOptional(name, isRequired, (name: string) =>
                type === 'File'
                  ? `${name} instanceof File`
                  : `typeof ${name} === '${type}'`,
              ),
  };
}

function defineInterface(schema: Schema, definitionKey: string): Definition {
  const name = typeName(definitionKey);
  const extendInterface: string | undefined = schema.allOf
    ? toCamelCase(
        dereferenceType(
          (schema.allOf.find(allOfSchema => !!allOfSchema.$ref) || {}).$ref,
        ),
        false,
      )
    : undefined;
  const allOfProps: Schema = schema.allOf
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
    } as { [propertyName: string]: Schema },
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

function determineResponseType(response: Response): ParsedSchema {
  if (response == null) {
    return { type: 'void', imports: [] };
  }

  const { schema } = response;

  if (schema == null) {
    return { type: 'void', imports: [] };
  }

  const nullable =
    (schema as Schema & { 'x-nullable'?: boolean })['x-nullable'] || false;
  const responseSchema = parseSchema(schema, false, {
    name: 'res',
    isRequired: true,
    prefixGuards: true,
  });

  const type = responseSchema.imports.reduce(
    (prefixedType, tokenToPrefix) =>
      prefixedType.split(tokenToPrefix).join(`models.${tokenToPrefix}`),
    responseSchema.type,
  );

  return {
    ...responseSchema,
    type: nullable ? `(${type}) | null` : type,
    guard: () =>
      nullable
        ? `(res == null || ${responseSchema.guard?.('')})`
        : responseSchema.guard?.('') || '',
  };
}

function transformParameters(
  parameters: ExtendedSwaggerParam[],
  allParams: Parameters,
): Parameter[] {
  return parameters.map((param: ExtendedSwaggerParam) => {
    const ref = param.$ref;
    const derefName = ref ? dereferenceType(ref) : undefined;
    const paramRef: SwaggerParameter | undefined = derefName
      ? allParams[derefName]
      : undefined;
    const name =
      paramRef && 'name' in paramRef
        ? paramRef.name || ''
        : (param as Parameter).name; // TODO: simplify this

    const parsedSchema = determineResponseType({
      description: '',
      schema:
        paramRef &&
        !('enum' in paramRef) &&
        !('schema' in paramRef && paramRef.schema?.type === 'object')
          ? (paramRef as Schema)
          : 'schema' in param
          ? param.schema
          : (param as Schema),
    });

    return {
      ...param, // todo: check if this needs spreading
      ...determineParamType(
        paramRef && 'in' in paramRef ? paramRef.in : (param as Parameter).in,
      ),

      description: replaceNewLines(
        (param as Parameter).description || paramRef?.description,
        ' ',
      ),
      camelCaseName: toCamelCase(name),
      importType: parsedSchema.imports.join('/* this was joined */,'), // todo: this can probably be deleted along with `importType` in type Parameter
      isRequired:
        (param as Parameter).isRequired ||
        // tslint:disable-next-line:no-any
        (<any>param).required ||
        paramRef?.required,
      name,
      type: parsedSchema.type,
      parsedSchema,
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
