/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DashboardService, USE_DOMAIN, USE_HTTP_OPTIONS } from './api-client.service';

export * from './models';

export { DashboardService } from './dashboard.service';
export { DashboardInterface } from './dashboard.interface';

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

export interface DashboardServiceModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class DashboardServiceModule {
  /**
   * Use this method in your root module to provide the DashboardServiceModule
   *
   * If you are not providing
   * @param { DashboardServiceModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: DashboardServiceModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: DashboardServiceModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        DashboardService
      ]
    };
  }
}
