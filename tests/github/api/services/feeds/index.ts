/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { FeedsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './feeds-api-client.service';
import { GuardedFeedsAPIClient } from './guarded-feeds-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { FeedsAPIClient } from './feeds-api-client.service';
export { FeedsAPIClientInterface } from './feeds-api-client.interface';
export { GuardedFeedsAPIClient } from './guarded-feeds-api-client.service';

@NgModule({})
export class FeedsAPIClientModule {
  /**
   * Use this method in your root module to provide the FeedsAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<FeedsAPIClientModule> {
    return {
      ngModule: FeedsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: FeedsAPIClient, useClass: GuardedFeedsAPIClient }] : [FeedsAPIClient]),
      ]
    };
  }
}
