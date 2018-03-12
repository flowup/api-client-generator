import { Schema, Spec as Swagger } from 'swagger-schema-official';

export type RenderFileName = (text: string, render: Render) => string;
export type Render = (text: string) => string;

export interface Definition {
  name?: string;
  properties: Property[];
  imports: string[];
  isEnum?: boolean;
  isNumeric?: boolean; // used for determining if string or numeric enum should be generated
  renderFileName?(): RenderFileName; // generate dash-case file names to templates
}

export interface MustacheData {
  readonly isSecure: boolean;
  readonly swagger: Swagger;
  readonly domain: string;
  readonly methods: Method[];
  readonly definitions: Definition[];
}

export type TypescriptBasicTypes = 'string' | 'number' | 'boolean' | 'undefined' | 'any';
export type In = 'body' | 'path' | 'query' | 'modelbinding' | 'header' | 'formData';
export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface Property {
  readonly camelCaseName?: string;
  readonly isArray?: boolean;
  readonly isRef?: boolean;
  readonly 'in'?: In;
  readonly 'enum'?: (string | boolean | number | {})[];
  readonly items?: Parameter;
  readonly name?: string;
  readonly $ref?: string;
  readonly schema?: Schema;
  type?: string;
  typescriptType?: TypescriptBasicTypes | string;
  readonly importType?: string;
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
  readonly summaryLines?: string[];
  readonly isSecure?: boolean;  // currently unused TODO
  readonly parameters: Parameter[];
  readonly hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  readonly response?: string;  // method return type
}
