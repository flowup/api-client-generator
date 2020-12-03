/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { RateLimitAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './rate-limit-api-client.service';
import { GuardedRateLimitAPIClient } from './guarded-rate-limit-api-client.service';

export { RateLimitAPIClient } from './rate-limit-api-client.service';
export { RateLimitAPIClientInterface } from './rate-limit-api-client.interface';
export { GuardedRateLimitAPIClient } from './guarded-rate-limit-api-client.service';

@NgModule({})
export class RateLimitAPIClientModule {
  /**
   * Use this method in your root module to provide the RateLimitAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<RateLimitAPIClientModule> {
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
