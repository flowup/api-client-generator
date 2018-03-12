/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { APIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './api-client.service';

export * from './models';

export { APIClient } from './api-client.service';

export interface HttpOptions {
  headers?: HttpHeaders, // provided headers will be used as default for each request
  params?: HttpParams,   // provided params will be used as default for each request
  reportProgress?: boolean,
  withCredentials?: boolean,
}

export interface APIClientModuleConfig {
  domain?: string;
  httpOptions?: HttpOptions;
}

@NgModule({})
export class APIClientModule {
  /**
   * Use this method in your root module to provide the APIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: APIClientModule,
      providers: [
        ...(config.domain ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        APIClient
      ]
    };
  }
}