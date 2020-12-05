/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { DummySelectorAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './dummy-selector-api-client.service';
import { GuardedDummySelectorAPIClient } from './guarded-dummy-selector-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { DummySelectorAPIClient } from './dummy-selector-api-client.service';
export { DummySelectorAPIClientInterface } from './dummy-selector-api-client.interface';
export { GuardedDummySelectorAPIClient } from './guarded-dummy-selector-api-client.service';

@NgModule({})
export class DummySelectorAPIClientModule {
  /**
   * Use this method in your root module to provide the DummySelectorAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<DummySelectorAPIClientModule> {
    return {
      ngModule: DummySelectorAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: DummySelectorAPIClient, useClass: GuardedDummySelectorAPIClient }] : [DummySelectorAPIClient]),
      ]
    };
  }
}
