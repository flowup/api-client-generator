/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { GistsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './gists-api-client.service';
import { GuardedGistsAPIClient } from './guarded-gists-api-client.service';

export { GistsAPIClient } from './gists-api-client.service';
export { GistsAPIClientInterface } from './gists-api-client.interface';
export { GuardedGistsAPIClient } from './guarded-gists-api-client.service';

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

export interface GistsAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class GistsAPIClientModule {
  /**
   * Use this method in your root module to provide the GistsAPIClientModule
   *
   * If you are not providing
   * @param { GistsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: GistsAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: GistsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: GistsAPIClient, useClass: GuardedGistsAPIClient }] : [GistsAPIClient]),
      ]
    };
  }
}
