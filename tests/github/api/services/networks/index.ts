/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { NetworksAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './networks-api-client.service';
import { GuardedNetworksAPIClient } from './guarded-networks-api-client.service';

export { NetworksAPIClient } from './networks-api-client.service';
export { NetworksAPIClientInterface } from './networks-api-client.interface';
export { GuardedNetworksAPIClient } from './guarded-networks-api-client.service';

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

export interface NetworksAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class NetworksAPIClientModule {
  /**
   * Use this method in your root module to provide the NetworksAPIClientModule
   *
   * If you are not providing
   * @param { NetworksAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: NetworksAPIClientModuleConfig = {}): ModuleWithProviders<NetworksAPIClientModule> {
    return {
      ngModule: NetworksAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: NetworksAPIClient, useClass: GuardedNetworksAPIClient }] : [NetworksAPIClient]),
      ]
    };
  }
}
