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
  { paths, security, parameters, responses = {} }: Swagger,
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

          const responseType = determineResponseType(
            okResponse && isReference(okResponse)
              ? responses[dereferenceType(okResponse.$ref)]
              : okResponse,
          );

          const transformedParams = transformParameters(
            [...(pathDef.parameters || []), ...(operation.parameters || [])],
            parameters || {},
          );

          const responseTypeName = typeName(responseType.name);

          return {
            hasJsonResponse: true,
            isSecure:
              security !== undefined || operation.security !== undefined,
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
            responseTypeName,
            responseGuard: BASIC_TS_TYPE_REGEX.test(responseTypeName)
              ? `typeof res === '${responseTypeName}'`
              : `guards.is${responseTypeName}(res)`,
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
          definition.schema,
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
          filterByName(toCamelCase(method.responseTypeName, false)),
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
        ('schema' in definition ? definition.schema : definition) || {},
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
          const captured = /(\d) (\w+)/.exec(cur); // parse the `- 42 UltimateAnswer` description syntax
          return captured ? { ...acc, [captured[1]]: captured[2] } : acc;
        }, {})
      : null;

  return {
    definitionName: typeName(definitionKey),
    properties:
      enumSchema &&
      enumSchema.map((val, index) => ({
        name: (isNumeric
          ? descKeys
            ? descKeys[val.toString()]
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
      const isArray = propSchema.type === 'array';
      const ref =
        propSchema.additionalProperties &&
        typeof propSchema.additionalProperties !== 'boolean'
          ? propSchema.additionalProperties.$ref
          : propSchema.$ref;
      const typescriptType =
        'enum' in propSchema
          ? (propSchema.type === 'number'
              ? propSchema.enum || []
              : (propSchema.enum || []).map(str => `'${str}'`)
            ).join(' | ')
          : propSchema.properties
          ? 'object'
          : toTypescriptType(
              isArray
                ? determineArrayType(propSchema)
                : ref
                ? dereferenceType(ref)
                : propSchema.additionalProperties &&
                  typeof propSchema.additionalProperties !== 'boolean'
                ? propSchema.additionalProperties.type
                : propSchema.type,
            );
      const isRef = !!parseReference(propSchema);
      const propertyAllOf =
        propSchema.allOf && propSchema.allOf.length
          ? parseInterfaceProperties(
              propSchema.allOf.reduce<{ [key: string]: Schema }>(
                (acc, prop, i) => ({ ...acc, [i]: prop }),
                {},
              ),
            )
          : [];
      const allOfParsed = propertyAllOf.map(
        prop => `${prop.typescriptType}${prop.isArray ? '[]' : ''}`,
      );
      const allOfImports = propertyAllOf.map(prop => `${prop.typescriptType}`);
      const type = typescriptType.replace('[]', '');
      const name =
        /^[A-Za-z_$][\w$]*$/.test(propName) ||
        propName === ADDITIONAL_PROPERTIES_KEY
          ? propName
          : `'${propName}'`;

      const property: Property = {
        isArray,
        isDictionary: !!propSchema.additionalProperties,
        isRef,
        isPrimitiveType: BASIC_TS_TYPE_REGEX.test(type),
        isRequired: requiredProps.includes(propName),
        name,
        description: replaceNewLines(propSchema.description),
        type: type,
        typescriptType: allOfParsed.length
          ? allOfParsed.join(' & ')
          : typescriptType,
        imports: isRef ? [type, ...allOfImports] : allOfImports,
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

function parseReference(schema: Schema): string {
  if ('$ref' in schema && schema.$ref) {
    return schema.$ref;
  } else if (schema.type === 'array' && schema.items) {
    if ('$ref' in schema.items && schema.items.$ref) {
      return schema.items.$ref;
    } else if (
      !Array.isArray(schema.items) &&
      schema.items.items &&
      '$ref' in schema.items.items &&
      schema.items.items.$ref
    ) {
      return schema.items.items.$ref;
    }
  } else if (
    schema.additionalProperties &&
    typeof schema.additionalProperties !== 'boolean' &&
    schema.additionalProperties.$ref
  ) {
    return schema.additionalProperties.$ref;
  }

  return '';
}

function determineArrayType(property: Schema = {}): string {
  if (Array.isArray(property.items)) {
    logWarn('Arrays with type diversity are currently not supported');
    return 'any';
  }

  if (property.items && property.items.$ref) {
    return typeName(dereferenceType(property.items.$ref));
  } else if (property.items && property.items.type) {
    if (/^(array)$/i.test(property.items.type || '')) {
      return `${determineArrayType(property.items)}[]`;
    }

    return typeName(property.items.type);
  }

  return typeName(property.type);
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

function determineResponseType(
  response: Response,
): {
  readonly type: string;
  readonly name: string;
} {
  if (response == null) {
    return { name: 'void', type: 'void' };
  }

  const { schema } = response;

  if (schema == null) {
    return { name: 'void', type: 'void' };
  }

  const nullable =
    (schema as Schema & { 'x-nullable'?: boolean })['x-nullable'] || false;

  if (schema.type === 'array') {
    const { items } = schema;

    if (items == null) {
      logWarn('`items` field not present; `any[]` will be used');
      return { name: 'any', type: 'any[]' };
    }

    if (Array.isArray(items)) {
      logWarn(
        'Arrays with type diversity are currently not supported; `any[]` will be used',
      );
      return { name: 'any', type: 'any[]' };
    }

    const name = items.$ref ? dereferenceType(items.$ref) : items.type;
    const type = nullable
      ? `${typeName(name, true)} | null`
      : typeName(name, true);
    return { name: name || 'any', type };
  }

  if (schema.$ref != null) {
    const name = dereferenceType(schema.$ref);
    const type = nullable ? `${typeName(name)} | null` : typeName(name);
    return { name, type };
  }

  if (schema.type != null) {
    const type = nullable
      ? `${typeName(schema.type)} | null`
      : typeName(schema.type);
    return { name: type, type };
  }

  if (schema.properties) {
    const type = nullable ? 'object | null' : 'object';
    return { name: type, type };
  }

  return { name: 'any', type: 'any' };
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
      'name' in paramRef ? paramRef.name || '' : (param as Parameter).name;
    const type =
      ('type' in param && param.type) ||
      (paramRef && 'type' in paramRef && paramRef.type) ||
      '';
    const isArray = /^(array)$/i.test(type);
    const typescriptType =
      'enum' in param
        ? (param.type === 'number'
            ? param.enum || []
            : (param.enum || []).map(str => `'${str}'`)
          ).join(' | ')
        : 'schema' in param && param.schema && param.schema.properties
        ? 'object'
        : toTypescriptType(
            isArray
              ? determineArrayType(param as Schema)
              : !ref ||
                (paramRef &&
                  'type' in paramRef &&
                  !paramRef.enum &&
                  paramRef.type &&
                  BASIC_TS_TYPE_REGEX.test(paramRef.type))
              ? type
              : derefName,
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
      importType:
        'enum' in param ? typescriptType : prefixImportedModels(typescriptType),
      isArray,
      isRequired:
        (param as Parameter).isRequired ||
        // tslint:disable-next-line:no-any
        (<any>param).required ||
        paramRef.required,
      name,
      typescriptType,
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
