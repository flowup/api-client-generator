/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { SearchAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './search-api-client.service';
import { GuardedSearchAPIClient } from './guarded-search-api-client.service';

export { SearchAPIClient } from './search-api-client.service';
export { SearchAPIClientInterface } from './search-api-client.interface';
export { GuardedSearchAPIClient } from './guarded-search-api-client.service';

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

export interface SearchAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class SearchAPIClientModule {
  /**
   * Use this method in your root module to provide the SearchAPIClientModule
   *
   * If you are not providing
   * @param { SearchAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: SearchAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: SearchAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: SearchAPIClient, useClass: GuardedSearchAPIClient }] : [SearchAPIClient]),
      ]
    };
  }
}
