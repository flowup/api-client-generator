/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { UsersAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './users-api-client.service';
import { GuardedUsersAPIClient } from './guarded-users-api-client.service';

export { UsersAPIClient } from './users-api-client.service';
export { UsersAPIClientInterface } from './users-api-client.interface';
export { GuardedUsersAPIClient } from './guarded-users-api-client.service';

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

export interface UsersAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class UsersAPIClientModule {
  /**
   * Use this method in your root module to provide the UsersAPIClientModule
   *
   * If you are not providing
   * @param { UsersAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: UsersAPIClientModuleConfig = {}): ModuleWithProviders<UsersAPIClientModule> {
    return {
      ngModule: UsersAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: UsersAPIClient, useClass: GuardedUsersAPIClient }] : [UsersAPIClient]),
      ]
    };
  }
}
