import { Schema, Spec as Swagger } from 'swagger-schema-official';

export type RenderFileName = (text: string, render: Render) => string;
export type Render = (text: string) => string;

export interface Definition {
  readonly definitionName: string;
  readonly properties: Property[];
  readonly imports: string[];
  readonly extend?: string;
  readonly description?: string;
  readonly isEnum?: boolean;
  readonly isNumeric?: boolean; // used for determining if string or numeric enum should be generated
  renderFileName?(): RenderFileName; // generate dash-case file names to templates
}

export interface MustacheData {
  readonly isSecure: boolean;
  readonly swagger: Swagger;
  readonly swaggerTag?: string;
  readonly domain: string;
  readonly methods: Method[];
  readonly definitions: Definition[];
  readonly serviceName: string;
  readonly serviceFileName: string;
  readonly interfaceName: string;
  readonly interfaceFileName: string;
}

export type TypescriptBasicTypes = 'string' | 'number' | 'boolean' | 'undefined' | 'any';
export type In = 'body' | 'path' | 'query' | 'modelbinding' | 'header' | 'formData';
export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type FileInfix = 'model' | 'enum' | 'service' | 'interface';

export interface Property {
  readonly camelCaseName?: string;
  readonly isArray?: boolean;
  readonly isRef?: boolean;
  readonly isPrimitiveType?: boolean;
  readonly 'in'?: In | string;
  readonly 'enum'?: (string | boolean | number | {})[];
  readonly items?: Schema | Schema[];
  readonly name?: string;
  readonly description?: string;
  readonly $ref?: string;
  readonly schema?: Schema;
  readonly type?: string;
  readonly typescriptType?: TypescriptBasicTypes | string;
  readonly importType?: string;
  readonly isRequired?: boolean;
  readonly imports?: string[];
}

export interface Parameter extends Property {
  readonly isBodyParameter?: boolean;
  readonly isFormParameter?: boolean;
  readonly isHeaderParameter?: boolean;
  readonly isPathParameter?: boolean;
  readonly isQueryParameter?: boolean;
}

export interface Method {
  readonly path?: string;  // path appended to base in method
  readonly methodName?: string;  // mane of the generated method
  readonly methodType?: MethodType;  // type of the http method
  readonly description?: string;
  readonly isSecure?: boolean;  // currently unused TODO
  readonly parameters: Parameter[];
  readonly hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  readonly isVoid: boolean;
  readonly response?: string;  // method return type
  readonly responseTypeName: string; // method return type without prefix
  readonly requestResponseType?: 'blob'; // supported types of Angular's Http ResponseContentType
  readonly formData?: Pick<Parameter, 'name' | 'camelCaseName'>[]; // list of parameter names which are form data params
}

/**
 * Options for generator
 */
export interface GenOptions {
  /**
   * Path to the swagger file
   */
  sourceFile: string;
  /**
   * Path where generated files should be emitted
   */
  outputPath: string;
  /**
   * Generates actions and models only for the specified api
   */
  splitPathTags?: string[];
  /**
   * Skip creating index file with module export
   */
  skipModuleExport?: boolean;
}

export type ClientGenerator = (...args: any[]) => Promise<string[]>; // tslint:disable-line no-any
