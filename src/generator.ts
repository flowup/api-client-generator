import * as fs from 'fs';
import * as recursiveDir from 'mkdirp';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile } from 'swagger-parser';
import { Response, Schema, Spec as Swagger } from 'swagger-schema-official';
import { promisify } from 'util';

export type RenderFileName = (text: string, render: any) => string;

const BASIC_TS_TYPE_REGEX = /^string|number|integer|boolean|undefined|any|object$/i;

export interface Definition {
  name?: string;
  properties: Parameter[];
  imports: string[];
  isEnum?: boolean;
  renderFileName?: () => RenderFileName; // generate dash-case file names to templates
}

export interface MustacheData {
  readonly description: string;
  readonly isSecure: boolean;
  readonly swagger: Swagger;
  readonly domain: string;
  readonly methods: Method[];
  readonly definitions: Definition[];
}

export type TypescriptBasicTypes = 'string' | 'number' | 'boolean' | 'undefined' | 'any';
export type In = 'body' | 'path' | 'query' | 'modelbinding' | 'header' | 'formData';
export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface Parameter {
  readonly camelCaseName?: string;
  readonly isArray?: boolean;
  readonly isBodyParameter?: boolean;
  readonly isFormParameter?: boolean;
  readonly isHeaderParameter?: boolean;
  readonly isPathParameter?: boolean;
  readonly isRef?: boolean;
  readonly isQueryParameter?: boolean;
  readonly 'in'?: In;
  readonly 'enum'?: any[];
  readonly items?: Parameter;
  readonly name?: string,
  readonly schema?: any,
  type?: string,
  typescriptType?: TypescriptBasicTypes | string;
  readonly importType?: string;
}

export interface Method {
  readonly path?: string;  // path appended to base in method
  readonly methodName?: any;  // mane of the generated method
  readonly methodType?: MethodType;  // type of the http method
  readonly summaryLines?: any[];
  readonly isSecure?: boolean;  // currently unused TODO
  readonly parameters: Parameter[];
  readonly hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  readonly response?: string;  // method return type
}

export class Generator {
  constructor(private swaggerFilePath: string,
              private outputPath: string) {
  }

  static camelCase(text: string = '', lowerFirstLetter = true): string {
    text = Generator.removeDuplicateWords(text);

    if (/^[A-Z0-9]+$/.test(text) || text === '') {
      return text;
    }

    let camelText = text.split(/[-.]/).map(word => `${word[0].toUpperCase()}${word.substring(1)}`).join('');

    return lowerFirstLetter ? `${camelText[0].toLowerCase()}${camelText.substring(1)}` : camelText;
  }

  static dashCase(text: string = ''): string {
    text = text.replace(/([A-Z]+)(?![^A-Z])/g, (g) => `-${g.toLowerCase()}`); // transform abbreviations (for example: ID, HTTP, ...)
    return text.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).replace(/^-/, '');
  }

  /**
   * Strip #/definitions prefix from a type string
   * @param {string} refString
   * @returns {string}
   */
  private static dereferenceType(refString: string): string {
    return refString.replace('#/definitions/', '');
  };

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
  private static removeDuplicateWords(text: string): string {
    return text.replace(/^(.{3,})(?=\1)/ig, '');
  };

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
        return Generator.typeName(items.type, true);
      } else {
        return 'any[]';
      }
    } else {
      return Generator.typeName(type);
    }
  }

  private static typeName(typeName: string = '', isArray: boolean = false): string {
    let type: string;

    if (BASIC_TS_TYPE_REGEX.test(typeName)) {
      type = typeName;
    } else {
      type = Generator.camelCase(typeName, false);
    }

    return `${type}${isArray ? '[]' : ''}`;
  };

  private static fileName(name: string = '', type: 'model' | 'enum' = 'model'): string {
    return `${Generator.dashCase(name.replace(/model|enum/i, ''))}.${type}`;
  };

  private static generateDomain({schemes, host, basePath}: Swagger): string {

    // if the host is defined then try and use a protocol from the swagger file. Otherwise just send
    // requests using the same protocol as the library was loaded with.
    const protocol = host && schemes && schemes.length > 0 ? `${schemes[0]}://` : '//';

    // if no host exists in the swagger file default to effectively a relative path.
    const domain = host ? host : '${window.location.hostname}${window.location.port ? \':\'+window.location.port : \'\'}';
    const base = ('/' === basePath || !basePath ? '' : basePath);
    return `${protocol}${domain}${base}`;
  }

  private static generateDefinitions(definitions: { [definitionsName: string]: Schema } = {}): Definition[] {
    return Object.entries(definitions).map(([defVal, defIn]) => {
      /* service models import */

      if (defIn.enum && defIn.enum.length !== 0) {
        return {
          name: Generator.typeName(defVal),
          properties: defIn.enum.map((val) => ({
            name: val.toString(),
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
                  property.type = Generator.typeName(Generator.dereferenceType(propIn.items.$ref));
                } else if (propIn.items && propIn.items.type) {
                  property.type = Generator.typeName(propIn.items.type);
                } else {
                  property.type = propIn.type;
                }
              } else {
                property.type = Generator.typeName(
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
        const name = Generator.typeName(defVal);

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
              return Generator.typeName(Generator.dereferenceType(items.$ref), true);
            } else if (items) {
              return Generator.typeName(items.type, true);
            }
          } else {
            console.warn('Multiple type arrays are not supported');
          }
        }
      } else if (responseSchema && responseSchema.$ref) {
        return Generator.typeName(Generator.dereferenceType(responseSchema.$ref));
      }
    }

    return 'any';
  }

  private static prefixImportedModels(type: string): string {
    return BASIC_TS_TYPE_REGEX.test(type) ? type : `models.${type}`;
  }

  private static transformParameters(parameters: Parameter[]): Parameter[] {
    return Array.isArray(parameters)
      // todo: required params
      ? parameters.map((param) => {
          const parameter = {...param};

          if ('schema' in param && typeof param.schema.$ref === 'string') {
            parameter.type = Generator.camelCase(Generator.dereferenceType(param.schema.$ref));
          }

          parameter.camelCaseName = Generator.camelCase(param.name);
          parameter.typescriptType = Generator.toTypescriptType(parameter);
          parameter.importType = Generator.prefixImportedModels(parameter.typescriptType);

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
            console.warn('Path parameters are currently unsupported and will not be generated properly');
          }

          return parameter;
        }
      )
      : [];
  }

  async generateAPIClient(): Promise<void> {
    /* Create output folder if not already present */
    if (!await promisify(fs.exists)(this.outputPath)) {
      await promisify(fs.mkdir)(this.outputPath);
    }

    const mustacheData = this.createMustacheViewModel(await swaggerFile(this.swaggerFilePath));

    await this.generateClient(mustacheData);
    await this.generateModels(mustacheData);
    await this.generateModuleExportIndex(mustacheData);
  }

  async generateClient(viewContext: MustacheData): Promise<void> {
    /* generate main API client class */
    const clientTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/ngx-service.mustache')).toString();

    const result = Mustache.render(clientTemplate, viewContext);
    const outfile = join(this.outputPath, 'api-client.service.ts');

    await promisify(fs.writeFile)(outfile, result, 'utf-8');
  }

  async generateModels(viewContext: MustacheData): Promise<void> {
    const outputDir = join(this.outputPath, 'models');
    const outIndexFile = join(outputDir, '/index.ts');

    const modelTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/ngx-model.mustache')).toString();
    const modelExportTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/ngx-models-export.mustache')).toString();

    if (!await promisify(fs.exists)(outputDir)) {
      await promisify(fs.mkdir)(outputDir);
    }

    // generate model export index here
    fs.writeFileSync(outIndexFile, Mustache.render(modelExportTemplate, viewContext), 'utf-8');

    // generate API models
    viewContext.definitions.forEach((definition) => {
      let result = Mustache.render(modelTemplate, definition);
      let outfile = join(outputDir, Generator.fileName(definition.name, definition.isEnum ? 'enum' : 'model') + '.ts');

      recursiveDir(dirname(outfile), () => {
        fs.writeFileSync(outfile, result, 'utf-8');
      });
    });
  }

  async generateModuleExportIndex(viewContext: MustacheData): Promise<void> {
    const exportTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/ngx-module-export.mustache')).toString();
    const result = Mustache.render(exportTemplate, viewContext);
    const outfile = join(this.outputPath, '/index.ts');

    fs.writeFileSync(outfile, result, 'utf-8');
  }

  createMustacheViewModel(swagger: Swagger): MustacheData {
    const authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    return {
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
                path: path.replace(/({.*?})/g, '$$$1'),
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
                response: Generator.prefixImportedModels(Generator.determineResponseType(op.responses)),
              })
            )
        )),
      definitions: Generator.generateDefinitions(swagger.definitions)
    };
  }
}
