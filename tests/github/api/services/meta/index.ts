/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MetaAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './meta-api-client.service';

export { MetaAPIClient } from './meta-api-client.service';
export { MetaAPIClientInterface } from './meta-api-client.interface';

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

export interface MetaAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class MetaAPIClientModule {
  /**
   * Use this method in your root module to provide the MetaAPIClientModule
   *
   * If you are not providing
   * @param { MetaAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: MetaAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: MetaAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        MetaAPIClient
      ]
    };
  }
}
