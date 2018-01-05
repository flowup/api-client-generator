import * as fs from 'fs';
import * as recursiveDir from 'mkdirp';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';
import { parse as swaggerFile } from 'swagger-parser';
import { Schema, Spec as Swagger } from 'swagger-schema-official';
import { promisify } from 'util';

export interface Definition {
  name?: string;
  properties: Parameter[];
  refs: any[];
  imports: string[];
  isEnum?: boolean;
  fileName?: () => (text: string, render: any) => string; // generate dash-case file names to templates
  last?: boolean;
}

export interface MustacheData {
  description: string,
  isSecure: boolean,
  swagger: Swagger,
  domain: string,
  methods: Method[],
  definitions: Definition[]
}

export type TypescriptBasicTypes = 'string' | 'number' | 'boolean' | 'undefined' | 'any';
export type In = 'body' | 'path' | 'query' | 'modelbinding' | 'header' | 'formData';
export type MethodType = 'get' | 'post' | 'put' | 'delete';

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
  path?: string;  // path appended to base in method
  backTickPath?: string;
  methodName?: any;  // mane of the generated method
  method?: string;
  methodType?: MethodType;  // type of the http method
  isGET?: boolean;
  hasPayload?: boolean;
  summaryLines?: any[];
  isSecure?: boolean;  // currently unused TODO
  parameters: Parameter[];
  hasBodyParameters?: boolean;  // if this is true, body will be JSON stringified
  hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  response?: string;  // method return type
}

export class Generator {
  constructor(private swaggerFilePath: string,
              private outputPath: string,
              private debug = false) {
  }

  static getRefType(refString: string): string {
    let segments = refString.split('/');
    return segments.length === 3 ? segments[2] : segments[0];
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

  private static toTypescriptType(parameter: Parameter): void {
    if (!parameter.type) {
      parameter.typescriptType = 'any';
      return;
    }

    if (/^number|integer|double$/i.test(parameter.type)) {
      parameter.typescriptType = 'number';
    } else if (/^string|boolean$/i.test(parameter.type)) {
      parameter.typescriptType = parameter.type.toLocaleLowerCase();
    } else if (/^object$/i.test(parameter.type)) {
      parameter.typescriptType = 'any';
    } else if (/^array$/i.test(parameter.type)) {

      if (parameter.items) {
        parameter.typescriptType = Generator.modelName(parameter.items.type, true);
      } else {
        parameter.typescriptType = 'any[]';
      }

      parameter.isArray = true;

    } else {
      parameter.typescriptType = Generator.modelName(parameter.type); //todo here?
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
    const clientTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/angular2-service.mustache')).toString();

    let result = Mustache.render(clientTemplate, viewContext);
    let outfile = join(this.outputPath, 'api-client-service.ts');

    this.logMessage('Creating output file', outfile);
    await promisify(fs.writeFile)(outfile, result, 'utf-8');
  }

  async generateModels(viewContext: MustacheData) {
    let outputDir = join(this.outputPath, 'models');

    const modelTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/angular2-model.mustache')).toString();

    if (!await promisify(fs.exists)(outputDir)) {
      await promisify(fs.mkdir)(outputDir);
    }

    // generate API models
    viewContext.definitions.forEach((definition) => {
      let result = Mustache.render(modelTemplate, definition);
      let outfile = join(outputDir, Generator.fileName(definition.name, definition.isEnum ? 'enum' : 'model') + '.ts');

      this.logMessage('Creating output file', outfile);

      recursiveDir(dirname(outfile), () => {
        fs.writeFileSync(outfile, result, 'utf-8');
      });
    });
  }

  async generateExportDefinition(viewContext: MustacheData) {
    const exportTemplate = (await promisify(fs.readFile)(__dirname + '/../templates/angular2-models-export.mustache')).toString();
    let result = Mustache.render(exportTemplate, viewContext);
    let outfile = join(this.outputPath, '/index.ts');

    this.logMessage('Creating output file', outfile);
    fs.writeFileSync(outfile, result, 'utf-8');
  }

  createMustacheViewModel(swagger: Swagger): MustacheData {
    const authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    let data: MustacheData = {
      description: swagger.info.description || '',
      isSecure: !!swagger.securityDefinitions,
      swagger: swagger,
      domain: Generator.generateDomain(swagger),
      methods: [],
      definitions: []
    };

    Object.entries(swagger.paths).forEach(([path, api]) => {
      // const globalParams = Object.entries(api)
      //   .filter(([m]) => m.toLowerCase() !== 'parameters')
      //   .map(([, op]) => op);

      let globalParams = [];
      Object.entries(api).forEach(([m, op]) => {
        if (m.toLowerCase() === 'parameters') {
          globalParams = op;
        }
      });

      Object.entries(api).forEach(([m, op]) => {
        if (authorizedMethods.indexOf(m.toUpperCase()) === -1) {
          return;
        }

        // The description line is optional in the spec
        let summaryLines = [];
        if (op.description) {
          summaryLines = op.description.split('\n');
          summaryLines.splice(summaryLines.length - 1, 1);
        }

        let method: Method = {
          path: path,
          backTickPath: path.replace(/({.*?})/g, '$$$1'),  //todo rename this
          methodName: Generator.camelCase(
              op.operationId
                ? op.operationId
                : console.error('Method name could not be determined, operationID is undefined')
          ),
          method: m.toUpperCase(),
          methodType: <MethodType>m.toLowerCase(),
          isGET: m.toUpperCase() === 'GET',
          hasPayload: !['GET', 'DELETE', 'HEAD'].some(i => i === m.toUpperCase()),
          summaryLines: summaryLines,
          isSecure: swagger.security !== undefined || op.security !== undefined,
          parameters: [],
          hasBodyParameters: false,
          hasJsonResponse: true,
        };

        let params: Parameter[] = []; // todo: refactor this

        if (Array.isArray(op.parameters)) {
          params = op.parameters;
        }

        params = params.concat(globalParams);

        // method parameters
        params.forEach((parameter) => {
          if ('schema' in parameter && typeof parameter.schema.$ref === 'string') {
            parameter.type = Generator.camelCase(Generator.getRefType(parameter.schema.$ref));
          }

          parameter.camelCaseName = Generator.camelCase(parameter.name);

          Generator.toTypescriptType(parameter);

          if (parameter.enum && parameter.enum.length === 1) {
            parameter.isSingleton = true;
            parameter.singleton = parameter.enum[0];
          }

          if (parameter.in === 'body') {
            parameter.isBodyParameter = true;
            method.hasBodyParameters = true;
          } else if (parameter.in === 'path') {
            parameter.isPathParameter = true;
          } else if (parameter.in === 'query' || parameter.in === 'modelbinding') {
            parameter.isQueryParameter = true;
            if (parameter['x-name-pattern']) {
              parameter.isPatternType = true;
            }
          } else if (parameter.in === 'header') {
            parameter.isHeaderParameter = true;
          } else if (parameter.in === 'formData') {
            parameter.isFormParameter = true;
          }

          method.parameters.push(parameter);
        });

        if (method.parameters.length > 0) {
          method.parameters[method.parameters.length - 1].last = true;
        }



        if (op.responses['200'] !== undefined) {
          let responseSchema = op.responses['200'].schema;

          if (responseSchema.type) {
            if (responseSchema['type'] === 'array') {
              let items = responseSchema.items;
              if (items.$ref) {
                method.response = Generator.modelName(items.$ref.replace('#/definitions/', ''), true);
              } else {
                method.response = Generator.modelName(items['type'], true);
              }
            } else {
              method.response = 'any';
            }
          } else if (responseSchema.$ref) {
            method.response = Generator.modelName(responseSchema.$ref.replace('#/definitions/', ''));
          } else {
            method.response = 'any';
          }
        } else { //todo check non-200 response codes
          method.response = 'any';
        }

        data.methods.push(method);
      });
    });

    Object.entries(swagger.definitions || {}).forEach(([defVal, defIn]) => {

      /* service models import */
      let definition: Definition;

      if (defIn.enum && defIn.enum.length !== 0) {
        definition = {
          name: Generator.enumName(defVal),
          properties: defIn.enum.map((val) => ({
            name: val.toString(),
            camelCaseName: Generator.camelCase(val.toString())
          })),
          isEnum: true,
          refs: [],
          imports: [],
          fileName: () => (text, render) => Generator.fileName(render(text), 'enum'),
        };
      } else {
        definition = {
          name: Generator.modelName(defVal),
          properties: [],
          refs: [],
          imports: [],
          isEnum: false,
          fileName: () => (text, render) => Generator.fileName(render(text), 'model'),
        };

        Object.entries<Schema>(defIn.properties || {}).forEach(([propVal, propIn]: [string, Schema]) => {
          let property: Parameter = {
            name: propVal,
            isRef: '$ref' in propIn || (propIn.type === 'array' && propIn.items && '$ref' in propIn.items),
            isArray: propIn.type === 'array',
          };

          if (Array.isArray(propIn.items)) {
            console.warn('Multiple type arrays not supported');
            // TODO: array can have multiple item types
            property.type = 'any';
            return;
          }

          if (property.isArray) {
            if (propIn.items && propIn.items.$ref) {
              property.type = Generator.modelName(propIn.items.$ref.replace('#/definitions/', ''));
            } else if (propIn.items && propIn.items.type) {
              property.type = Generator.modelName(propIn.items.type);
            } else {
              property.type = propIn.type;
            }
          } else {
            property.type = Generator.modelName(
              propIn.$ref
                ? propIn.$ref.replace('#/definitions/', '')
                : propIn.type
            );
          }

          Generator.toTypescriptType(property);

          if (property.isRef) {
            definition.refs.push(property);
            definition.imports.push(property.type || '');
          } else {
            definition.properties.push(property);
          }
        });
      }

      // sort an filter duplicate imports
      definition.imports = definition.imports.sort().filter((el, i, a) => (i === a.indexOf(el)) ? 1 : 0);

      data.definitions.push(definition);
    });

    if (data.definitions.length > 0) {
      data.definitions[data.definitions.length - 1].last = true;
    }

    return data;
  }

  logMessage(text: string, param: string = '') {
    if (this.debug) {
      console.log(text, param);
    }
  }
}
