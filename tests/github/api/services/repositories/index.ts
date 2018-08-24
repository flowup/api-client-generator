/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { RepositoriesAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './repositories-api-client.service';

export { RepositoriesAPIClient } from './repositories-api-client.service';
export { RepositoriesAPIClientInterface } from './repositories-api-client.interface';

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

export interface RepositoriesAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class RepositoriesAPIClientModule {
  /**
   * Use this method in your root module to provide the RepositoriesAPIClientModule
   *
   * If you are not providing
   * @param { RepositoriesAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: RepositoriesAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: RepositoriesAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        RepositoriesAPIClient
      ]
    };
  }
}
