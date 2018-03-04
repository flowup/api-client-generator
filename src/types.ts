import { Spec as Swagger } from 'swagger-schema-official';

export type RenderFileName = (text: string, render: any) => string;

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
