/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { NetworksAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './networks-api-client.service';
import { GuardedNetworksAPIClient } from './guarded-networks-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { NetworksAPIClient } from './networks-api-client.service';
export { NetworksAPIClientInterface } from './networks-api-client.interface';
export { GuardedNetworksAPIClient } from './guarded-networks-api-client.service';

@NgModule({})
export class NetworksAPIClientModule {
  /**
   * Use this method in your root module to provide the NetworksAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<NetworksAPIClientModule> {
    return {
      ngModule: NetworksAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: NetworksAPIClient, useClass: GuardedNetworksAPIClient }] : [NetworksAPIClient]),
      ]
    };
  }
}
