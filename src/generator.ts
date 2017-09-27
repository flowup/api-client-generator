import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as Mustache from 'mustache';
import * as _ from 'lodash';
import * as path from 'path';

export interface TemplatesModel {
  service: string;
  model: string;
  models_export: string;
}

export interface Definition {
  name?: string;
  properties: any[];
  refs: any[];
  imports: any[];
  lower?: () => (text, render) => string; // lower keyword to templates
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
  in?: In;
  enum?: any[];
  items?: Parameter;
  name?: string,
  schema?: any,
  singleton?: any,
  type?: string,
  typescriptType?: TypescriptBasicTypes | string;
}

export interface Method {
  path?: string;
  backTickPath?: string;
  methodName?: any;
  method?: string;
  angular2httpMethod?: string;
  isGET?: boolean;
  hasPayload?: boolean;
  summaryLines?: any[];
  isSecure?: boolean;
  parameters: Parameter[];
  hasBodyParameters?: boolean;
  hasJsonResponse?: boolean;
  response?: any;
}

export class GeneratorClass {

  templates: TemplatesModel;

  swaggerParsed: any;
  viewModel: any;

  constructor(swaggerFile: string,
              private outputPath: string,
              private debug = false) {
    this.LogMessage('Reading Swagger file', swaggerFile);
    let swaggerFileContent = fs.readFileSync(swaggerFile, 'UTF-8');

    if (swaggerFile.match(/.*\.ya?ml/)) {
      this.LogMessage('Parsing Swagger YAML');
      this.swaggerParsed = yaml.load(swaggerFileContent);
    } else {
      this.LogMessage('Parsing Swagger JSON');
      this.swaggerParsed = JSON.parse(swaggerFileContent);
    }

    this.LogMessage('Reading Mustache templates');

    this.templates = {
      service: fs.readFileSync(__dirname + '/../templates/angular2-service.mustache', 'utf-8'),
      model: fs.readFileSync(__dirname + '/../templates/angular2-model.mustache', 'utf-8'),
      models_export: fs.readFileSync(__dirname + '/../templates/angular2-models-export.mustache', 'utf-8')
    };

    this.LogMessage('Creating Mustache view model');
    this.viewModel = this.createMustacheViewModel();
  }

  generateAPIClient() {
    this.generateClient();
    // this.generateModels();
    // this.generateCommonModelsExportDefinition();

    this.LogMessage('API client generated successfully');
  }

  generateClient() {
    // generate main API client class
    this.LogMessage('Rendering template for API');

    fs.writeFileSync(this.outputPath + '/' + 'viewModel.json', JSON.stringify(this.viewModel, null, 2), 'utf-8');

    let result = GeneratorClass.renderLintAndBeautify(this.templates.service, this.viewModel, this.templates);

    let outfile = this.outputPath + '/' + 'index.ts';
    this.LogMessage('Creating output file', outfile);
    fs.writeFileSync(outfile, result, 'utf-8');
  }

  generateModels() {
    let outputDir: string = this.outputPath + '/models';

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    // generate API models

    this.viewModel.definitions.forEach((definition) => {
      this.LogMessage('Rendering template for model ', definition.name);
      let result = GeneratorClass.renderLintAndBeautify(this.templates.model, definition, this.templates);

      let outfile = path.join(outputDir, definition.name.toLowerCase() + '.model.ts');

      this.LogMessage('Creating output file', outfile);

      mkdirp(path.dirname(outfile), () => {
        fs.writeFileSync(outfile, result, 'utf-8');
      });
    });
  }

  generateCommonModelsExportDefinition() {
    let outputDir: string = this.outputPath;

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    this.LogMessage('Rendering common models export');
    let result = GeneratorClass.renderLintAndBeautify(this.templates.models_export, this.viewModel, this.templates);

    let outfile = outputDir + '/models.ts';

    this.LogMessage('Creating output file', outfile);
    fs.writeFileSync(outfile, result, 'utf-8');
  }

  static renderLintAndBeautify(template: string, model: any, templates?: any) {
    return Mustache.render(template, model, templates);
  };

  createMustacheViewModel() {
    let swagger = this.swaggerParsed;
    let authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    let data: MustacheData = {
      isNode: false,
      description: swagger.info.description,
      isSecure: swagger.securityDefinitions !== undefined,
      swagger: swagger,
      domain: (swagger.schemes && swagger.schemes.length > 0 ? swagger.schemes[0] : 'http') + '://' +
      (swagger.host ? swagger.host : 'localhost') + ('/' === swagger.basePath ? '' : swagger.basePath),
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
          methodName: op['x-swagger-js-method-name'] ?
            op['x-swagger-js-method-name'] :
            (op.operationId ? op.operationId : this.getPathToMethodName(m, path)),
          method: m.toUpperCase(),
          angular2httpMethod: m.toLowerCase(),
          isGET: m.toUpperCase() === 'GET',
          hasPayload: !_.includes(['GET', 'DELETE', 'HEAD'], m.toUpperCase()),
          summaryLines: summaryLines,
          isSecure: swagger.security !== undefined || op.security !== undefined,
          parameters: [],
          hasBodyParameters: false,
          hasJsonResponse: _.some(_.defaults([], swagger.produces, op.produces), (response) => { // FIXME TODO PREROBIT
            // return response.indexOf('/json') !== -1;
            return true;
          })
        };

        let params: Parameter[] = [];

        if (_.isArray(op.parameters)) {
          params = op.parameters;
        }

        params = params.concat(globalParams);

        // Index file!
        params.forEach((parameter) => {
          // Ignore headers which are injected by proxies & app servers
          // eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
          if (parameter['x-proxy-header'] && !data.isNode) {
            return;
          }

          if ('schema' in parameter && _.isString(parameter.schema.$ref)) {
            parameter.type = this.camelCase(GeneratorClass.getRefType(parameter.schema.$ref));
          }

          parameter.camelCaseName = this.camelCase(parameter.name);

          // lets also check for a bunch of Java objects!
          if (parameter.type === 'integer' || parameter.type === 'double' || parameter.type === 'Integer') {
            parameter.typescriptType = 'number';
          } else if (parameter.type === 'String') {
            parameter.typescriptType = 'string';
          } else if (parameter.type === 'Boolean') {
            parameter.typescriptType = 'boolean';
          } else if (parameter.type === 'object') {
            parameter.typescriptType = 'any';
          } else if (parameter.type === 'array') {
            if (parameter.items) {
              parameter.typescriptType = this.camelCase(parameter.items.type) + '[]';
            } else {
              parameter.typescriptType = 'any[]';
            }

            parameter.isArray = true;
          } else {
            parameter.typescriptType = this.camelCase(parameter.type);
          }

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
                method.response = this.camelCase(items['$ref'].replace('#/definitions/', '')) + '[]';
              } else {
                method.response = this.camelCase(items['type']) + '[]';
              }
            } else {
              method.response = 'any';
            }
          } else if ('$ref' in responseSchema) {
            method.response = this.camelCase(responseSchema['$ref'].replace('#/definitions/', ''));
          } else {
            method.response = 'any';
          }
        } else { // check non-200 response codes
          method.response = 'any';
        }

        data.methods.push(method);
      });
    });

    // console.log('\n-----------\n\n', typeof swagger.definitions, '\n\n\n', swagger.definitions);

    Object.entries(swagger.paths).forEach(([defVal]) => {
      let defName: string = this.camelCase(defVal);

      let definition: Definition = {
        name: defName,
        properties: [],
        refs: [],
        imports: [],
        lower: () => (text, render) => render(text).toLowerCase(),
      };

      Object.entries(swagger.paths).forEach(([propVal, propin]) => {
        let property: Parameter = {
          name: propVal,
          isRef: '$ref' in propin || (propin.type === 'array' && '$ref' in propin.items),
          isArray: propin.type === 'array',
        };

        if (property.isArray)
          if ('$ref' in propin.items) {
            property.type = this.camelCase(propin.items['$ref'].replace('#/definitions/', ''));
          } else if ('type' in propin.items) {
            property.type = this.camelCase(propin.items['type']);
          } else {
            property.type = propin.type;
          }

        else {
          property.type = '$ref' in propin ? this.camelCase(propin['$ref'].replace('#/definitions/', '')) : propin.type;
        }

        if (property.type === 'integer' || property.type === 'double') {
          property.typescriptType = 'number';
        } else if (property.type === 'object') {
          property.typescriptType = 'any';
        } else {
          property.typescriptType = property.type;
        }


        if (property.isRef) {
          definition.refs.push(property);

          // Don't duplicate import statements
          let addImport = true;
          for (let i = 0; i < definition.imports.length; i++) {
            if (definition.imports[i] === property.type) {
              addImport = false;
            }
          }
          if (addImport) {
            definition.imports.push(property.type);
          }
        }
        else {
          definition.properties.push(property);
        }
      });

      data.definitions.push(definition);
    });

    if (data.definitions.length > 0) {
      data.definitions[data.definitions.length - 1].last = true;
    }

    return data;
  }

  static getRefType(refString) {
    let segments = refString.split('/');
    return segments.length === 3 ? segments[2] : segments[0];
  };

  getPathToMethodName(m, path) {
    if (path === '/' || path === '') {
      return m;
    }

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

    let result = this.camelCase(segments.join('-'));

    return m.toLowerCase() + result[0].toUpperCase() + result.substring(1);
  }

  camelCase(text: string = ''): string {
    if (!text) {
      return text;
    }

    if (text.indexOf('-') === -1 && text.indexOf('.') === -1) {
      return text;
    }

    let tokens: string[] = [];

    text.split('-').forEach((token, index) => {
      tokens.push((index > 0 ? token[0].toUpperCase() : token[0]) + token.substring(1));
    });

    let partialres = tokens.join('');
    tokens = [];

    partialres.split('.').forEach((token, index) => {
      tokens.push((index > 0 ? token[0].toUpperCase() : token[0]) + token.substring(1));
    });

    return tokens.join('');
  }

  LogMessage(text: string, param: string = '') {
    if (this.debug) {
      console.log('\n----> ' + text, param);
    }
  }
}
