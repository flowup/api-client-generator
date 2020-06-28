/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ReposAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './repos-api-client.service';
import { GuardedReposAPIClient } from './guarded-repos-api-client.service';

export { ReposAPIClient } from './repos-api-client.service';
export { ReposAPIClientInterface } from './repos-api-client.interface';
export { GuardedReposAPIClient } from './guarded-repos-api-client.service';

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

export interface ReposAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class ReposAPIClientModule {
  /**
   * Use this method in your root module to provide the ReposAPIClientModule
   *
   * If you are not providing
   * @param { ReposAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: ReposAPIClientModuleConfig = {}): ModuleWithProviders<ReposAPIClientModule> {
    return {
      ngModule: ReposAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: ReposAPIClient, useClass: GuardedReposAPIClient }] : [ReposAPIClient]),
      ]
    };
  }
}
