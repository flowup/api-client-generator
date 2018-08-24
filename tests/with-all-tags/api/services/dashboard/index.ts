/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DashboardAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './dashboard-api-client.service';

export { DashboardAPIClient } from './dashboard-api-client.service';
export { DashboardAPIClientInterface } from './dashboard-api-client.interface';

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

export interface DashboardAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class DashboardAPIClientModule {
  /**
   * Use this method in your root module to provide the DashboardAPIClientModule
   *
   * If you are not providing
   * @param { DashboardAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: DashboardAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: DashboardAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        DashboardAPIClient
      ]
    };
  }
}
