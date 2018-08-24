/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { GitignoreAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './gitignore-api-client.service';

export { GitignoreAPIClient } from './gitignore-api-client.service';
export { GitignoreAPIClientInterface } from './gitignore-api-client.interface';

/**
 * provided options, headers and params will be used as default for each request
 */
export interface DefaultHttpOptions {
  headers?: {[key: string]: string};
  params?: {[key: string]: string};
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface GitignoreAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class GitignoreAPIClientModule {
  /**
   * Use this method in your root module to provide the GitignoreAPIClientModule
   *
   * If you are not providing
   * @param { GitignoreAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: GitignoreAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: GitignoreAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        GitignoreAPIClient
      ]
    };
  }
}
