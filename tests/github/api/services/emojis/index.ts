/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EmojisAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './emojis-api-client.service';

export { EmojisAPIClient } from './emojis-api-client.service';
export { EmojisAPIClientInterface } from './emojis-api-client.interface';

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

export interface EmojisAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class EmojisAPIClientModule {
  /**
   * Use this method in your root module to provide the EmojisAPIClientModule
   *
   * If you are not providing
   * @param { EmojisAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: EmojisAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: EmojisAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        EmojisAPIClient
      ]
    };
  }
}
