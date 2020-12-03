/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { LegacyAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './legacy-api-client.service';
import { GuardedLegacyAPIClient } from './guarded-legacy-api-client.service';

export { LegacyAPIClient } from './legacy-api-client.service';
export { LegacyAPIClientInterface } from './legacy-api-client.interface';
export { GuardedLegacyAPIClient } from './guarded-legacy-api-client.service';

@NgModule({})
export class LegacyAPIClientModule {
  /**
   * Use this method in your root module to provide the LegacyAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<LegacyAPIClientModule> {
    return {
      ngModule: LegacyAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: LegacyAPIClient, useClass: GuardedLegacyAPIClient }] : [LegacyAPIClient]),
      ]
    };
  }
}
