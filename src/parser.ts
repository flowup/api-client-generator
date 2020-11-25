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
  MustacheData,
  Parameter,
  ParsedSchema,
  Property,
  Render,
  RenderFileName,
} from './types';
import {
  BASIC_TS_TYPE_REGEX,
  toCamelCase,
  dereferenceType,
  fileName,
  prefixImportedModels,
  replaceNewLines,
  toTypescriptType,
  typeName,
  logWarn,
  compareStringByKey,
  isReference,
  ADDITIONAL_PROPERTIES_KEY,
  accessProp,
  guardFn,
} from './helper';

interface Parameters {
  [parameterName: string]: SwaggerParameter;
}

interface ExtendedParameters {
  [parameterName: string]: ExtendedParameter;
}

type ExtendedParameter = SwaggerParameter & {
  enum: EnumType;
  schema: Schema;
  type: 'string' | 'integer';
  required: boolean;
  'x-enumNames'?: string[];
};

interface Definitions {
  [definitionsName: string]: Schema;
}

type EnumType = string[] | number[] | boolean[] | {}[];

type ExtendedSwaggerParam = Parameter | Reference;

export function createMustacheViewModel(
  swagger: Swagger,
  swaggerTag?: string,
): MustacheData {
  const methods = parseMethods(swagger, swaggerTag);
  const camelSwaggerTag = toCamelCase(swaggerTag, false);
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
    serviceName: camelSwaggerTag ? `${camelSwaggerTag}APIClient` : 'APIClient',
    serviceFileName: fileName(
      camelSwaggerTag ? `${camelSwaggerTag}APIClient` : 'api-client',
      'service',
    ),
    interfaceName: camelSwaggerTag
      ? `${camelSwaggerTag}APIClientInterface`
      : 'APIClientInterface',
    interfaceFileName: fileName(
      camelSwaggerTag ? `${camelSwaggerTag}APIClient` : 'api-client',
      'interface',
    ),
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
    : "${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}";
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

          const okResponse: Response | Reference =
            operation.responses[successResponseCode];

          const responseTypeSchema = determineResponseType(
            okResponse && isReference(okResponse) // TODO: this can probably be refactored to `(okResponse as Reference)?.$ref` and isReference can be deleted
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
            responseGuard: BASIC_TS_TYPE_REGEX.test(responseType.type)
              ? `typeof res === '${responseType.type}'`
              : `guards.is${responseType.type}(res)`, // TODO: this has to support more complex logic for arrays
            isVoid: responseType.name === 'void',
            response: prefixImportedModels(responseType.type),
            // tslint:disable-next-line:max-line-length
            description: `${replaceNewLines(operation.description, '$1   * ')}${
              operation.description ? '\n   * ' : ''
            }Response generated for [ ${successResponseCode} ] HTTP response code.`,
            ...(/^(File|Blob)\b/i.test(responseType.name) && {
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

  return {
    definitionName: typeName(definitionKey),
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
    renderFileName: (): RenderFileName => (
      text: string,
      render: Render,
    ): string => fileName(render(text), 'enum'),
  };
}

function parseInterfaceProperties(
  properties: { [propertyName: string]: Schema } = {},
  requiredProps: string[] = [],
): Property[] {
  return Object.entries<Schema>(properties)
    .map(([propName, propSchema]: [string, Schema]) => {
      const parsedSchema = parseSchema(propSchema);
      const propertyAllOf = propSchema.allOf?.length
        ? parseInterfaceProperties(
            propSchema.allOf.reduce<{ [key: string]: Schema }>(
              (acc, prop, i) => ({ ...acc, [i]: prop }),
              {},
            ),
          )
        : [];

      const name =
        /^[A-Za-z_$][\w$]*$/.test(propName) ||
        propName === ADDITIONAL_PROPERTIES_KEY // todo: check if this is needed here
          ? propName
          : `'${propName}'`;

      const property: Property = {
        parsedSchema,
        isPrimitiveType: BASIC_TS_TYPE_REGEX.test(parsedSchema.type), // TODO: check if this is needed with guards refactored
        isRequired: requiredProps.includes(propName),
        name,
        description: replaceNewLines(propSchema.description),
        type: propertyAllOf.length
          ? propertyAllOf
              .map(({ parsedSchema }) => parsedSchema?.type)
              .filter((type): type is string => !!type)
              .join(' & ')
          : parsedSchema.type,
        imports: propertyAllOf.reduce(
          (imports, { parsedSchema }) => [
            ...imports,
            ...(parsedSchema?.imports || []),
          ],
          parsedSchema.imports,
        ),
      };

      const guard = `(${guardFn(
        () =>
          propertyAllOf.length
            ? `(${propertyAllOf
                .map(prop =>
                  guardFn(
                    () => `is${prop.typescriptType}(${accessProp(name)})`,
                    { ...prop, name, isRequired: true },
                  ),
                )
                .join(' && ')})`
            : 'enum' in propSchema
            ? `[${(typescriptType || '').replace(
                / \| /g,
                ', ',
              )}].includes(${accessProp(name)})`
            : `is${typescriptType}(${accessProp(name)})`,
        property,
      ).replace(/\s+/g, ' ')}) &&`;

      return { ...property, guard };
    })
    .sort(compareStringByKey('name')); // tslint:disable-line:no-array-mutation
}

function parseSchema(property: Schema = {}): ParsedSchema {
  if (Array.isArray(property.items)) {
    logWarn('Arrays with type diversity are currently not supported');
    return { type: 'any', imports: [] };
  }

  if ('enum' in property) {
    return {
      type: `(${(property.type === 'number'
        ? property.enum || []
        : (property.enum || []).map(str => `'${str}'`)
      ).join(' | ')})`,
      imports: [],
    };
  }

  if (property.properties) {
    return { type: 'object', imports: [] }; // type occurrence of inlined properties as object instead of any (TODO: consider supporting inlined properties)
  }

  if (property.$ref) {
    const refType = typeName(dereferenceType(property.$ref));

    return { type: refType, imports: [refType] };
  }

  if (property.items) {
    const parsedArraySchema = parseSchema(property.items as Schema);

    return {
      type: `${parsedArraySchema.type}[]`,
      imports: parsedArraySchema.imports,
    };
  }

  if (property.additionalProperties) {
    const parsedDictionarySchema = parseSchema(
      property.additionalProperties as Schema,
    );

    return {
      type: `{ ${ADDITIONAL_PROPERTIES_KEY}: ${parsedDictionarySchema.type} }`,
      imports: parsedDictionarySchema.imports,
    };
  }

  return {
    type: typeName(property.type),
    imports: [],
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
    renderFileName: (): RenderFileName => (
      text: string,
      render: Render,
    ): string => fileName(render(text), 'model'),
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
  // -->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->-->  TODO: tu skusit debugger na schemu co pripada k `getInventory` aby som zistil preco to tam da ten "object" ako "number" (uplne spravne je totiz { [key: string]: number } ale to tam zatial asi nedosiahneme
  const responseSchema = parseSchema(schema);

  const type = responseSchema.imports.reduce(
    (prefixedType, tokenToPrefix) =>
      prefixedType.split(tokenToPrefix).join(`models.${tokenToPrefix}`),
    responseSchema.type,
  );

  return {
    ...responseSchema,
    type: nullable ? `(${type}) | null` : type,
  };
}

function transformParameters(
  parameters: ExtendedSwaggerParam[],
  allParams: Parameters,
): Parameter[] {
  return parameters.map((param: ExtendedSwaggerParam) => {
    const ref =
      param.$ref ||
      ('schema' in param && param.schema && param.schema.$ref) ||
      '';
    const derefName = ref ? dereferenceType(ref) : undefined;
    const paramRef: Partial<SwaggerParameter> = derefName
      ? allParams[derefName] || {}
      : {};
    const name =
      'name' in paramRef ? paramRef.name || '' : (param as Parameter).name; // TODO: simplify this
    const parsedSchema = parseSchema(
      ref && !('enum' in paramRef)
        ? (paramRef as Schema)
        : 'schema' in param
        ? param.schema
        : (param as Schema),
    );

    return {
      ...param,
      ...determineParamType(
        'in' in paramRef ? paramRef.in : (param as Parameter).in,
      ),

      description: replaceNewLines(
        (param as Parameter).description || paramRef.description,
        ' ',
      ),
      camelCaseName: toCamelCase(name),
      importType: parsedSchema.imports.join('/* this was joined */,'), // todo: this can probably be deleted along with `importType` in type Parameter
      isRequired:
        (param as Parameter).isRequired ||
        // tslint:disable-next-line:no-any
        (<any>param).required ||
        paramRef.required,
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
