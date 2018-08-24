/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { NotificationsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './notifications-api-client.service';

export { NotificationsAPIClient } from './notifications-api-client.service';
export { NotificationsAPIClientInterface } from './notifications-api-client.interface';

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

export interface NotificationsAPIClientModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class NotificationsAPIClientModule {
  /**
   * Use this method in your root module to provide the NotificationsAPIClientModule
   *
   * If you are not providing
   * @param { NotificationsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: NotificationsAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: NotificationsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        NotificationsAPIClient
      ]
    };
  }
}
