/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TeamsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './teams-api-client.service';

export { TeamsAPIClient } from './teams-api-client.service';
export { TeamsAPIClientInterface } from './teams-api-client.interface';

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

export interface TeamsAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class TeamsAPIClientModule {
  /**
   * Use this method in your root module to provide the TeamsAPIClientModule
   *
   * If you are not providing
   * @param { TeamsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: TeamsAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: TeamsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        TeamsAPIClient
      ]
    };
  }
}
