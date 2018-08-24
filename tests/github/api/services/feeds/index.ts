/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { FeedsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './feeds-api-client.service';

export { FeedsAPIClient } from './feeds-api-client.service';
export { FeedsAPIClientInterface } from './feeds-api-client.interface';

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

export interface FeedsAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class FeedsAPIClientModule {
  /**
   * Use this method in your root module to provide the FeedsAPIClientModule
   *
   * If you are not providing
   * @param { FeedsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: FeedsAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: FeedsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        FeedsAPIClient
      ]
    };
  }
}
