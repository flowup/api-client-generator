/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DummySelectorAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './dummy-selector-api-client.service';
import { GuardedDummySelectorAPIClient } from './guarded-dummy-selector-api-client.service';

export { DummySelectorAPIClient } from './dummy-selector-api-client.service';
export { DummySelectorAPIClientInterface } from './dummy-selector-api-client.interface';
export { GuardedDummySelectorAPIClient } from './guarded-dummy-selector-api-client.service';

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

export interface DummySelectorAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class DummySelectorAPIClientModule {
  /**
   * Use this method in your root module to provide the DummySelectorAPIClientModule
   *
   * If you are not providing
   * @param { DummySelectorAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: DummySelectorAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: DummySelectorAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: DummySelectorAPIClient, useClass: GuardedDummySelectorAPIClient }] : [DummySelectorAPIClient]),
      ]
    };
  }
}
