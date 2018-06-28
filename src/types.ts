import { Schema, Spec as Swagger } from 'swagger-schema-official';

export type RenderFileName = (text: string, render: Render) => string;
export type Render = (text: string) => string;

export interface Definition {
  readonly name?: string;
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
  readonly domain: string;
  readonly methods: Method[];
  readonly definitions: Definition[];
  readonly serviceName: string;
  readonly fileName: string;
}

export type TypescriptBasicTypes = 'string' | 'number' | 'boolean' | 'undefined' | 'any';
export type In = 'body' | 'path' | 'query' | 'modelbinding' | 'header' | 'formData';
export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface Property {
  readonly camelCaseName?: string;
  readonly isArray?: boolean;
  readonly isRef?: boolean;
  readonly 'in'?: In | string;
  readonly 'enum'?: (string | boolean | number | {})[];
  readonly items?: Schema|Schema[];
  readonly name?: string;
  readonly description?: string;
  readonly $ref?: string;
  readonly schema?: Schema;
  readonly type?: string;
  readonly typescriptType?: TypescriptBasicTypes | string;
  readonly importType?: string;
}

export interface Parameter extends Property {
  readonly isBodyParameter?: boolean;
  readonly isFormParameter?: boolean;
  readonly isHeaderParameter?: boolean;
  readonly isPathParameter?: boolean;
  readonly isQueryParameter?: boolean;
  readonly isRequired?: boolean;
}

export interface Method {
  readonly path?: string;  // path appended to base in method
  readonly methodName?: string;  // mane of the generated method
  readonly methodType?: MethodType;  // type of the http method
  readonly description?: string;
  readonly isSecure?: boolean;  // currently unused TODO
  readonly parameters: Parameter[];
  readonly hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  readonly response?: string;  // method return type
  readonly responseType?: string; // method return type without prefix
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
  apiName?: string;
  /**
   * Skip creating index file with module export
   */
  skipModuleExport?: boolean;
}

export type AsyncProcedure = (...args: any[]) => Promise<void>; // tslint:disable-line no-any

export interface CommitOptions {
  addPath: string;
}
