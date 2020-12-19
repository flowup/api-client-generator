export interface Definition {
  readonly definitionName: string;
  readonly properties: Property[];
  readonly imports: string[];
  readonly extend?: string;
  readonly description?: string;
  readonly isEnum?: boolean;
  readonly isNumeric?: boolean; // used for determining if string or numeric enum should be generated
  readonly fileName: string; // dash-case file name use for imports
}

export interface TemplateData {
  readonly isSecure: boolean;
  readonly swaggerTag?: string;
  readonly domain: string;
  readonly methods: Method[];
  readonly definitions: Definition[];
  readonly serviceTag: string;
  readonly serviceName: string;
  readonly serviceFileName: string;
  readonly interfaceName: string;
  readonly interfaceFileName: string;
}

export type MethodType =
  /* these have body */
  | 'post'
  | 'put'
  | 'patch'
  /* these doesn't have body */
  | 'get'
  | 'delete'
  | 'head'
  | 'options';

export type FileInfix = 'model' | 'enum' | 'service' | 'interface';

export interface Property {
  readonly camelCaseName?: string;
  readonly enum?: (string | boolean | number | {})[];
  readonly name: string;
  readonly description?: string;
  readonly type?: string;
  readonly guard?: string;
  readonly parsedSchema?: ParsedSchema;
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
  readonly path?: string; // path appended to base in method
  readonly body?: string; // body that will be used for post, put and patch methods
  readonly methodName?: string; // mane of the generated method
  readonly methodType?: MethodType; // type of the http method
  readonly description?: string;
  readonly parameters: Parameter[];
  readonly paramsOptional: boolean; // indicates that parameters object can be empty
  readonly hasJsonResponse?: boolean; // if false, default toJson() should not be called TODO
  readonly responseTypeSchema: ParsedSchema; // method return type schema
  readonly requestResponseType?: 'blob'; // supported types of Angular HTTP ResponseContentType
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
   * Generate actions and models only for the specified api
   */
  splitPathTags?: string[];
  /**
   * Skip creating index file with module export
   */
  skipModuleExport?: boolean;
  /**
   * Skip creating type guards and guarded API client service
   */
  skipGuards?: boolean;
}

// tslint:disable-next-line no-any
export type ClientGenerator = (...args: any[]) => Promise<string[]>;

export interface ParsedSchema {
  type: string;
  imports: string[];
  guard?(name: string): string;
}

export type ParseSchemaMetadata = Pick<Property, 'name' | 'isRequired'>;
