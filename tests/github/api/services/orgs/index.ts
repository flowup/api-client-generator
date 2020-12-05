/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { OrgsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './orgs-api-client.service';
import { GuardedOrgsAPIClient } from './guarded-orgs-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { OrgsAPIClient } from './orgs-api-client.service';
export { OrgsAPIClientInterface } from './orgs-api-client.interface';
export { GuardedOrgsAPIClient } from './guarded-orgs-api-client.service';

@NgModule({})
export class OrgsAPIClientModule {
  /**
   * Use this method in your root module to provide the OrgsAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<OrgsAPIClientModule> {
    return {
      ngModule: OrgsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: OrgsAPIClient, useClass: GuardedOrgsAPIClient }] : [OrgsAPIClient]),
      ]
    };
  }
}
