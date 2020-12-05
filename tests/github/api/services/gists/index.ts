/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { GistsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './gists-api-client.service';
import { GuardedGistsAPIClient } from './guarded-gists-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { GistsAPIClient } from './gists-api-client.service';
export { GistsAPIClientInterface } from './gists-api-client.interface';
export { GuardedGistsAPIClient } from './guarded-gists-api-client.service';

@NgModule({})
export class GistsAPIClientModule {
  /**
   * Use this method in your root module to provide the GistsAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<GistsAPIClientModule> {
    return {
      ngModule: GistsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: GistsAPIClient, useClass: GuardedGistsAPIClient }] : [GistsAPIClient]),
      ]
    };
  }
}
