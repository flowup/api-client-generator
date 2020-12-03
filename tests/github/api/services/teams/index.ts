/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { TeamsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './teams-api-client.service';
import { GuardedTeamsAPIClient } from './guarded-teams-api-client.service';

export { TeamsAPIClient } from './teams-api-client.service';
export { TeamsAPIClientInterface } from './teams-api-client.interface';
export { GuardedTeamsAPIClient } from './guarded-teams-api-client.service';

@NgModule({})
export class TeamsAPIClientModule {
  /**
   * Use this method in your root module to provide the TeamsAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<TeamsAPIClientModule> {
    return {
      ngModule: TeamsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: TeamsAPIClient, useClass: GuardedTeamsAPIClient }] : [TeamsAPIClient]),
      ]
    };
  }
}
