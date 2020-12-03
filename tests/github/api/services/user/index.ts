/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { UserAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './user-api-client.service';
import { GuardedUserAPIClient } from './guarded-user-api-client.service';

export { UserAPIClient } from './user-api-client.service';
export { UserAPIClientInterface } from './user-api-client.interface';
export { GuardedUserAPIClient } from './guarded-user-api-client.service';

@NgModule({})
export class UserAPIClientModule {
  /**
   * Use this method in your root module to provide the UserAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<UserAPIClientModule> {
    return {
      ngModule: UserAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: UserAPIClient, useClass: GuardedUserAPIClient }] : [UserAPIClient]),
      ]
    };
  }
}
