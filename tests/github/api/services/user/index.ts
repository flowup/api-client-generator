/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { UserAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './user-api-client.service';
import { GuardedUserAPIClient } from './guarded-user-api-client.service';

export { UserAPIClient } from './user-api-client.service';
export { UserAPIClientInterface } from './user-api-client.interface';
export { GuardedUserAPIClient } from './guarded-user-api-client.service';

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

export interface UserAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class UserAPIClientModule {
  /**
   * Use this method in your root module to provide the UserAPIClientModule
   *
   * If you are not providing
   * @param { UserAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: UserAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: UserAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: UserAPIClient, useClass: GuardedUserAPIClient }] : [UserAPIClient]),
      ]
    };
  }
}
