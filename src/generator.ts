import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as recursiveDir from 'mkdirp';
import * as Mustache from 'mustache';
import { dirname, join } from 'path';

export interface TemplatesModel {
  service: string;
  model: string;
  modelsExport: string;
}

export interface Definition {
  name?: string;
  properties: any[];
  refs: any[];
  imports: any[];
  dashCase?: () => (text, render) => string; // generate dash-case file names to templates
  last?: boolean;
}

export interface MustacheData {
  isNode: boolean,
  description: string,
  isSecure: boolean,
  swagger: any,
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
  isSecure?: boolean;
  parameters: Parameter[];
  hasBodyParameters?: boolean;  // if this is true, body will be JSON stringified
  hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  response?: string;  // method return type
}

export class Generator {
  templates: TemplatesModel;
  swaggerParsed: any;
  viewModel: MustacheData;

  constructor(swaggerFile: string,
              private outputPath: string,
              private debug = false) {
    this.logMessage('Reading Swagger file', swaggerFile);
    let swaggerFileContent = fs.readFileSync(swaggerFile, 'UTF-8');

    if (swaggerFile.match(/.*\.ya?ml/)) {
      this.logMessage('Parsing Swagger YAML');
      this.swaggerParsed = yaml.load(swaggerFileContent);
    } else {
      this.logMessage('Parsing Swagger JSON');
      this.swaggerParsed = JSON.parse(swaggerFileContent);
    }

    this.logMessage('Reading Mustache templates');

    this.templates = {
      service: <string>fs.readFileSync(__dirname + '/../templates/angular2-service.mustache', 'utf-8'),
      model: <string>fs.readFileSync(__dirname + '/../templates/angular2-model.mustache', 'utf-8'),
      modelsExport: <string>fs.readFileSync(__dirname + '/../templates/angular2-models-export.mustache', 'utf-8')
    };

    this.logMessage('Creating Mustache view model');
    this.viewModel = this.createMustacheViewModel();
  }

  generateAPIClient() {
    this.generateClient();
    this.generateModels();
    this.generateCommonModelsExportDefinition();

    this.logMessage('API client generated successfully');
  }

  generateClient() {
    // generate main API client class
    this.logMessage('Rendering template for API');

    let result = Generator.renderLintAndBeautify(this.templates.service, this.viewModel, this.templates);
    let outfile = join(this.outputPath, 'api-client-service.ts');

    this.logMessage('Creating output file', outfile);
    fs.writeFileSync(outfile, result, 'utf-8');
  }

  generateModels() {
    let outputDir = join(this.outputPath, 'models');

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    // generate API models
    this.viewModel.definitions.forEach((definition) => {
      this.logMessage('Rendering template for model ', definition.name);
      let result = Generator.renderLintAndBeautify(this.templates.model, definition, this.templates);

      let outfile = join(outputDir, Generator.dashCase(definition.name) + '.model.ts');

      this.logMessage('Creating output file', outfile);

      recursiveDir(dirname(outfile), () => {
        fs.writeFileSync(outfile, result, 'utf-8');
      });
    });
  }

  generateCommonModelsExportDefinition() {
    let outputDir: string = this.outputPath;

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    this.logMessage('Rendering common models export');
    let result = Generator.renderLintAndBeautify(this.templates.modelsExport, this.viewModel, this.templates);

    let outfile = join(outputDir, '/index.ts');

    this.logMessage('Creating output file', outfile);
    fs.writeFileSync(outfile, result, 'utf-8');
  }

  static renderLintAndBeautify(template: string, model: any, templates?: any) {
    return Mustache.render(template, model, templates);
  };

  private generateDomain(schemes: string[] = []): string {
    const protocol = this.swaggerParsed.schemes && this.swaggerParsed.schemes.length > 0 ? this.swaggerParsed.schemes[0] : 'http';
    const domain = this.swaggerParsed.host ? this.swaggerParsed.host : 'localhost';
    const base = ('/' === this.swaggerParsed.basePath ? '' : this.swaggerParsed.basePath);
    return `${protocol}://${domain}${base}`;
  }

  createMustacheViewModel(): MustacheData {
    let swagger = this.swaggerParsed;
    let authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    let data: MustacheData = {
      isNode: false,
      description: swagger.info.description,
      isSecure: swagger.securityDefinitions !== undefined,
      swagger: swagger,
      domain: this.generateDomain(swagger.schemes),
      methods: [],
      definitions: []
    };

    Object.entries(swagger.paths).forEach(([path, api]) => {
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
          backTickPath: path.replace(/({.*?})/g, '$$$1'),
          methodName: Generator.camelCase(
            op['x-swagger-js-method-name'] ?
              op['x-swagger-js-method-name'] :
              (op.operationId ? op.operationId : Generator.getPathToMethodName(m, path))),
          method: m.toUpperCase(),
          methodType: <MethodType>m.toLowerCase(),
          isGET: m.toUpperCase() === 'GET',
          hasPayload: !['GET', 'DELETE', 'HEAD'].some(i => i === m.toUpperCase()),
          summaryLines: summaryLines,
          isSecure: swagger.security !== undefined || op.security !== undefined,
          parameters: [],
          hasBodyParameters: false,
          hasJsonResponse: true,
          // _.some(_.defaults([], swagger.produces, op.produces), (response) => { // FIXME
          //   return response.indexOf('/json') !== -1;
          // })
        };

        let params: Parameter[] = [];

        if (Array.isArray(op.parameters)) {
          params = op.parameters;
        }

        params = params.concat(globalParams);

        // method parameters
        params.forEach((parameter) => {
          // Ignore headers which are injected by proxies & app servers
          // eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
          if (parameter['x-proxy-header'] && !data.isNode) {
            return;
          }

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

          if ('type' in responseSchema) {
            if (responseSchema['type'] === 'array') {
              let items = responseSchema.items;
              if ('$ref' in items) {
                method.response = Generator.modelName(items['$ref'].replace('#/definitions/', ''), true);
              } else {
                method.response = Generator.modelName(items['type'], true);
              }
            } else {
              method.response = 'any';
            }
          } else if ('$ref' in responseSchema) {
            method.response = Generator.modelName(responseSchema['$ref'].replace('#/definitions/', ''));
          } else {
            method.response = 'any';
          }
        } else { // check non-200 response codes
          method.response = 'any';
        }

        data.methods.push(method);
      });
    });

    Object.entries(swagger.definitions || {}).forEach(([defVal, defIn]) => {

      /* service models import */
      let definition: Definition = {
        name: Generator.modelName(defVal),
        properties: [],
        refs: [],
        imports: [],
        dashCase: () => (text, render) => Generator.dashCase(render(text)),
      };

      Object.entries(defIn.properties || {}).forEach(([propVal, propIn]) => {
        let property: Parameter = {
          name: propVal,
          isRef: '$ref' in propIn || (propIn.type === 'array' && '$ref' in propIn.items),
          isArray: propIn.type === 'array',
        };

        if (property.isArray) {
          if ('$ref' in propIn.items) {
            property.type = Generator.modelName(propIn.items['$ref'].replace('#/definitions/', ''));
          } else if ('type' in propIn.items) {
            property.type = Generator.modelName(propIn.items['type']);
          } else {
            property.type = propIn.type;
          }
        } else {
          property.type = Generator.modelName('$ref' in propIn ? propIn['$ref'].replace('#/definitions/', '') : propIn.type);
        }

        Generator.toTypescriptType(property);

        if (property.isRef) {
          definition.refs.push(property);
          definition.imports.push(property.type);
        }
        else {
          definition.properties.push(property);
        }
      });

      // sort an filter duplicate imports
      definition.imports = definition.imports.sort().filter((el, i, a) => (i === a.indexOf(el)) ? 1 : 0);

      data.definitions.push(definition);
    });

    if (data.definitions.length > 0) {
      data.definitions[data.definitions.length - 1].last = true;
    }

    return data;
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
      parameter.typescriptType = Generator.modelName(parameter.type);
    }
  }

  static getRefType(refString) {
    let segments = refString.split('/');
    return segments.length === 3 ? segments[2] : segments[0];
  };

  static getPathToMethodName(m, path): string {
    if (path === '/' || path === '') {
      return m;
    }

    console.log('==> -->', path, m);

    // clean url path for requests ending with '/'
    let cleanPath = path;

    if (cleanPath.indexOf('/', cleanPath.length - 1) !== -1) {
      cleanPath = cleanPath.substring(0, cleanPath.length - 1);
    }

    let segments = cleanPath.split('/').slice(1);

    segments = segments.reduce((result, segment) => {
      if (segment[0] === '{' && segment[segment.length - 1] === '}') {
        segment = 'by' + segment[1].toUpperCase() + segment.substring(2, segment.length - 1);
      }

      result.push(segment);
    });

    let result = Generator.camelCase(segments.join('-'));

    return m.toLowerCase() + result[0].toUpperCase() + result.substring(1);
  }

  static camelCase(text: string = '', lowerFirstLetter = true): string {
    if (/^[A-Z0-9]+$/.test(text)) {
      return text;
    }

    let camelText = text.split(/[-.]/).map(word => `${word[0].toUpperCase()}${word.substring(1)}`).join('');

    return lowerFirstLetter ? `${camelText[0].toLowerCase()}${camelText.substring(1)}` : camelText;
  }

  static dashCase(text: string = ''): string {
    return text.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).replace(/^-/, '');
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

  logMessage(text: string, param: string = '') {
    if (this.debug) {
      console.log(text, param);
    }
  }
}
