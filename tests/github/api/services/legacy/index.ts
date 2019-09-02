/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { LegacyAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './legacy-api-client.service';
import { GuardedLegacyAPIClient } from './guarded-legacy-api-client.service';

export { LegacyAPIClient } from './legacy-api-client.service';
export { LegacyAPIClientInterface } from './legacy-api-client.interface';
export { GuardedLegacyAPIClient } from './guarded-legacy-api-client.service';

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

export interface LegacyAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class LegacyAPIClientModule {
  /**
   * Use this method in your root module to provide the LegacyAPIClientModule
   *
   * If you are not providing
   * @param { LegacyAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: LegacyAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: LegacyAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: LegacyAPIClient, useClass: GuardedLegacyAPIClient }] : [LegacyAPIClient]),
      ]
    };
  }
}
