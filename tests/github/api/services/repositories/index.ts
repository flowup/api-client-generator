/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { RepositoriesAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './repositories-api-client.service';
import { GuardedRepositoriesAPIClient } from './guarded-repositories-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { RepositoriesAPIClient } from './repositories-api-client.service';
export { RepositoriesAPIClientInterface } from './repositories-api-client.interface';
export { GuardedRepositoriesAPIClient } from './guarded-repositories-api-client.service';

@NgModule({})
export class RepositoriesAPIClientModule {
  /**
   * Use this method in your root module to provide the RepositoriesAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<RepositoriesAPIClientModule> {
    return {
      ngModule: RepositoriesAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: RepositoriesAPIClient, useClass: GuardedRepositoriesAPIClient }] : [RepositoriesAPIClient]),
      ]
    };
  }
}
