/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { APIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './api-client.service';
import { GuardedAPIClient } from './guarded-api-client.service';
import { APIClientModuleConfig } from './types';

export { APIClient } from './api-client.service';
export { APIClientInterface } from './api-client.interface';
export { GuardedAPIClient } from './guarded-api-client.service';

@NgModule({})
export class APIClientModule {
  /**
   * Use this method in your root module to provide the APIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<APIClientModule> {
    return {
      ngModule: APIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: APIClient, useClass: GuardedAPIClient }] : [APIClient]),
      ]
    };
  }
}
