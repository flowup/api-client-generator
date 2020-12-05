/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReposAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './repos-api-client.service';
import { GuardedReposAPIClient } from './guarded-repos-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { ReposAPIClient } from './repos-api-client.service';
export { ReposAPIClientInterface } from './repos-api-client.interface';
export { GuardedReposAPIClient } from './guarded-repos-api-client.service';

@NgModule({})
export class ReposAPIClientModule {
  /**
   * Use this method in your root module to provide the ReposAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<ReposAPIClientModule> {
    return {
      ngModule: ReposAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: ReposAPIClient, useClass: GuardedReposAPIClient }] : [ReposAPIClient]),
      ]
    };
  }
}
