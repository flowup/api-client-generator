/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { RateLimitAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './rate-limit-api-client.service';
import { GuardedRateLimitAPIClient } from './guarded-rate-limit-api-client.service';

export { RateLimitAPIClient } from './rate-limit-api-client.service';
export { RateLimitAPIClientInterface } from './rate-limit-api-client.interface';
export { GuardedRateLimitAPIClient } from './guarded-rate-limit-api-client.service';

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

export interface RateLimitAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class RateLimitAPIClientModule {
  /**
   * Use this method in your root module to provide the RateLimitAPIClientModule
   *
   * If you are not providing
   * @param { RateLimitAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: RateLimitAPIClientModuleConfig = {}): ModuleWithProviders<RateLimitAPIClientModule> {
    return {
      ngModule: RateLimitAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: RateLimitAPIClient, useClass: GuardedRateLimitAPIClient }] : [RateLimitAPIClient]),
      ]
    };
  }
}
