import * as fs from 'fs';
import * as recursiveDir from 'mkdirp';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile } from 'swagger-parser';
import { Response, Schema, Spec as Swagger } from 'swagger-schema-official';
import { promisify } from 'util';

export type RenderFileName = (text: string, render: any) => string;

export interface Definition {
  name?: string;
  properties: Parameter[];
  imports: string[];
  isEnum?: boolean;
  renderFileName?: () => RenderFileName; // generate dash-case file names to templates
  last?: boolean;
}

export interface MustacheData {
  readonly description: string,
  readonly isSecure: boolean,
  readonly swagger: Swagger,
  readonly domain: string,
  readonly methods: Method[],
  readonly definitions: Definition[]
}

export type TypescriptBasicTypes = 'string' | 'number' | 'boolean' | 'undefined' | 'any';
export type In = 'body' | 'path' | 'query' | 'modelbinding' | 'header' | 'formData';
export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface Parameter {
  camelCaseName?: string;
  isArray?: boolean;
  isBodyParameter?: boolean;
  isFormParameter?: boolean;
  isHeaderParameter?: boolean;
  isPathParameter?: boolean;
  isPatternType?: boolean;
  isRef?: boolean;
  isQueryParameter?: boolean;
  isSingleton?: boolean;
  last?: boolean;
  'in'?: In;
  'enum'?: any[];
  items?: Parameter;
  name?: string,
  schema?: any,
  singleton?: any,
  type?: string,
  typescriptType?: TypescriptBasicTypes | string;
}

export interface Method {
  readonly path?: string;  // path appended to base in method
  readonly backTickPath?: string;
  readonly methodName?: any;  // mane of the generated method
  readonly methodType?: MethodType;  // type of the http method
  readonly summaryLines?: any[];
  readonly isSecure?: boolean;  // currently unused TODO
  readonly parameters: Parameter[];
  readonly hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  response?: string;  // method return type // todo make readonly
}

export class Generator {
  constructor(private swaggerFilePath: string,
              private outputPath: string) {
  }

  /**
   * Strip #/definitions prefix from a type string
   * @param {string} refString
   * @returns {string}
   */
  static dereferenceType(refString: string): string {
    return refString.replace('#/definitions/', '');
  };

  static camelCase(text: string = '', lowerFirstLetter = true): string {
    if (/^[A-Z0-9]+$/.test(text) || text === '') {
      return text;
    }

    let camelText = text.split(/[-.]/).map(word => `${word[0].toUpperCase()}${word.substring(1)}`).join('');

    return lowerFirstLetter ? `${camelText[0].toLowerCase()}${camelText.substring(1)}` : camelText;
  }

  static dashCase(text: string = ''): string {
    return text.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).replace(/^-/, '');
    // todo: here take care of `horse-i-d-bar` it should be `horse-id-bar`
  }

  private static toTypescriptType({type, items}: Parameter): string {
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
      if (items) {
        return Generator.modelName(items.type, true);
      } else {
        return 'any[]';
      }
    } else {
      return Generator.modelName(type);
    }
  }

  private static modelName(typeName: string = '', isArray: boolean = false): string {
    let type: string;

    if (/.+Model$/.test(typeName)) {
      type = typeName;
    } else if (/^(?:string)|(?:number)|(?:integer)|(?:boolean)|(?:undefined)|(?:any)|(?:object)$/i.test(typeName)) {
      type = typeName;
    } else {
      type = `${Generator.camelCase(typeName, false)}Model`;
    }

    return `${type}${isArray ? '[]' : ''}`;
  };

  private static enumName(typeName: string = ''): string {
    return `${Generator.camelCase(typeName, false)}Enum`;
  };

  private static fileName(name: string = '', type: 'model' | 'enum' = 'model'): string {
    return `${Generator.dashCase(name.replace(/model|enum/i, ''))}.${type}`;
  };

  private static generateDomain({schemes, host, basePath}: Swagger): string {
    const protocol =
      schemes && schemes.length > 0
        ? schemes[0]
        : 'http';
    const domain = host ? host : 'localhost';
    const base = ('/' === basePath ? '' : basePath);
    return `${protocol}://${domain}${base}`;
  }

  private static generateDefinitions(definitions: { [definitionsName: string]: Schema } = {}): Definition[] {
    return Object.entries(definitions).map(([defVal, defIn]) => {
      /* service models import */

      if (defIn.enum && defIn.enum.length !== 0) {
        return {
          name: Generator.enumName(defVal),
          properties: defIn.enum.map((val) => ({
            name: val.toString(),
            camelCaseName: Generator.camelCase(val.toString())
          })),
          isEnum: true,
          refs: [],
          imports: [],
          renderFileName: (): RenderFileName => ((text: string, render: any): string => Generator.fileName(render(text), 'enum')),
        };
      } else {
        const properties: Parameter[] = Object.entries<Schema>(defIn.properties || {})
          .map(
            ([propVal, propIn]: [string, Schema]) => {
              let property: Parameter = {
                name: propVal,
                isRef: '$ref' in propIn || (propIn.type === 'array' && propIn.items && '$ref' in propIn.items),
                isArray: propIn.type === 'array',
              };

              if (Array.isArray(propIn.items)) {
                console.warn('Multiple type arrays are not supported');
                property.type = 'any';
                return property;
              }

              if (property.isArray) {
                if (propIn.items && propIn.items.$ref) {
                  property.type = Generator.modelName(Generator.dereferenceType(propIn.items.$ref));
                } else if (propIn.items && propIn.items.type) {
                  property.type = Generator.modelName(propIn.items.type);
                } else {
                  property.type = propIn.type;
                }
              } else {
                property.type = Generator.modelName(
                  propIn.$ref
                    ? Generator.dereferenceType(propIn.$ref)
                    : propIn.type
                );
              }

              property.typescriptType = Generator.toTypescriptType(property);

              return property;
            }
          )
          .sort((a, b) => a.name && b.name ? a.name.localeCompare(b.name) : -1);

        return {
          name: Generator.modelName(defVal),
          properties: properties,
          imports: properties
            .filter(({isRef}) => isRef)
            .map(({type}) => type || '')
            .sort()
            // filter duplicate imports
            .filter((el, i, a) => (i === a.indexOf(el)) ? 1 : 0),
          isEnum: false,
          renderFileName: (): RenderFileName => (text: string, render: any): string => Generator.fileName(render(text), 'model'),
        };
      }
    });
  }

  private static determineResponseType(responses: { [responseName: string]: Response }): string {
    if (responses['200'] !== undefined) { //TODO: check non-200 response codes
      const responseSchema = responses['200'].schema;

      if (responseSchema && responseSchema.type) {
        if (responseSchema.type === 'array') {
          const items = responseSchema.items;
          if (!Array.isArray(items)) {
            if (items && items.$ref) {
              return Generator.modelName(Generator.dereferenceType(items.$ref), true);
            } else if (items) {
              return Generator.modelName(items.type, true);
            }
          } else {
            console.warn('Multiple type arrays are not supported');
          }
        }
      } else if (responseSchema && responseSchema.$ref) {
        return Generator.modelName(Generator.dereferenceType(responseSchema.$ref));
      }
    }

    return 'any';
  }

  private static transformParameters(parameters: Parameter[]): Parameter[] {
    return Array.isArray(parameters)
      ? parameters.map((param) => {
          const parameter = {...param};

          if ('schema' in param && typeof param.schema.$ref === 'string') {
            parameter.type = Generator.camelCase(Generator.dereferenceType(param.schema.$ref));
          }

          parameter.camelCaseName = Generator.camelCase(param.name);
          parameter.typescriptType = Generator.toTypescriptType(parameter);

          if (param.enum && param.enum.length === 1) {
            parameter.isSingleton = true;
            parameter.singleton = param.enum[0];
          }

          if (param.in === 'body') {
            parameter.isBodyParameter = true;
          } else if (param.in === 'path') {
            parameter.isPathParameter = true;
          } else if (param.in === 'query' || param.in === 'modelbinding') {
            parameter.isQueryParameter = true;
          } else if (param.in === 'header') {
            parameter.isHeaderParameter = true;
          } else if (param.in === 'formData') {
            parameter.isFormParameter = true;
          }

          return parameter;
        }
      )
      : [];
  }

  async generateAPIClient() {
    /* Create output folder if not already present */
    if (!await promisify(fs.exists)(this.outputPath)) {
      await promisify(fs.mkdir)(this.outputPath);
    }

    const mustacheData = this.createMustacheViewModel(await swaggerFile(this.swaggerFilePath));

    await this.generateClient(mustacheData);
    await this.generateModels(mustacheData);
    await this.generateExportDefinition(mustacheData);
  }

  async generateClient(viewContext: MustacheData) {
    /* generate main API client class */
    const clientTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/ngx-service.mustache')).toString();

    let result = Mustache.render(clientTemplate, viewContext);
    let outfile = join(this.outputPath, 'api-client-service.ts');

    await promisify(fs.writeFile)(outfile, result, 'utf-8');
  }

  async generateModels(viewContext: MustacheData) {
    let outputDir = join(this.outputPath, 'models');

    const modelTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/ngx-model.mustache')).toString();

    if (!await promisify(fs.exists)(outputDir)) {
      await promisify(fs.mkdir)(outputDir);
    }

    // generate API models
    viewContext.definitions.forEach((definition) => {
      let result = Mustache.render(modelTemplate, definition);
      let outfile = join(outputDir, Generator.fileName(definition.name, definition.isEnum ? 'enum' : 'model') + '.ts');

      recursiveDir(dirname(outfile), () => {
        fs.writeFileSync(outfile, result, 'utf-8');
      });
    });
  }

  async generateExportDefinition(viewContext: MustacheData) {
    const exportTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/ngx-models-export.mustache')).toString();
    let result = Mustache.render(exportTemplate, viewContext);
    let outfile = join(this.outputPath, '/index.ts');

    fs.writeFileSync(outfile, result, 'utf-8');
  }

  createMustacheViewModel(swagger: Swagger): MustacheData {
    const authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    let data: MustacheData = {
      description: swagger.info.description || '',
      isSecure: !!swagger.securityDefinitions,
      swagger: swagger,
      domain: Generator.generateDomain(swagger),
      methods: [].concat.apply([], Object.entries(swagger.paths)
        .map(
          ([path, api]) => Object.entries(api)
            .filter(([method,]) => authorizedMethods.indexOf(method.toUpperCase()) !== -1)  // skip unsupported methods
            .map(
              ([method, op]) => ({
                path: path,
                backTickPath: path.replace(/({.*?})/g, '$$$1'),  //todo rename this
                methodName: Generator.camelCase(
                  op.operationId
                    ? op.operationId
                    : console.error('Method name could not be determined, operationID is undefined')
                ),
                methodType: <MethodType>method.toUpperCase(),
                summaryLines: op.description ? op.description.split('\n') : [], // description summary is optional
                isSecure: swagger.security !== undefined || op.security !== undefined,
                parameters: Generator.transformParameters(op.parameters),
                hasJsonResponse: true,
                response: Generator.determineResponseType(op.responses),
              })
            )
        )),
      definitions: Generator.generateDefinitions(swagger.definitions)
    };

    if (data.definitions.length > 0) {
      data.definitions[data.definitions.length - 1].last = true;
    }

    return data;
  }
}