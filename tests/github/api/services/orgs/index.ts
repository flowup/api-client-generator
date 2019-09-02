/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { OrgsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './orgs-api-client.service';
import { GuardedOrgsAPIClient } from './guarded-orgs-api-client.service';

export { OrgsAPIClient } from './orgs-api-client.service';
export { OrgsAPIClientInterface } from './orgs-api-client.interface';
export { GuardedOrgsAPIClient } from './guarded-orgs-api-client.service';

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

export interface OrgsAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class OrgsAPIClientModule {
  /**
   * Use this method in your root module to provide the OrgsAPIClientModule
   *
   * If you are not providing
   * @param { OrgsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: OrgsAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: OrgsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: OrgsAPIClient, useClass: GuardedOrgsAPIClient }] : [OrgsAPIClient]),
      ]
    };
  }
}
