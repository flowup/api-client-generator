/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { IssuesAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './issues-api-client.service';
import { GuardedIssuesAPIClient } from './guarded-issues-api-client.service';

export { IssuesAPIClient } from './issues-api-client.service';
export { IssuesAPIClientInterface } from './issues-api-client.interface';
export { GuardedIssuesAPIClient } from './guarded-issues-api-client.service';

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

export interface IssuesAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class IssuesAPIClientModule {
  /**
   * Use this method in your root module to provide the IssuesAPIClientModule
   *
   * If you are not providing
   * @param { IssuesAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: IssuesAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: IssuesAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: IssuesAPIClient, useClass: GuardedIssuesAPIClient }] : [IssuesAPIClient]),
      ]
    };
  }
}
