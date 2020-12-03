/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { IssuesAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './issues-api-client.service';
import { GuardedIssuesAPIClient } from './guarded-issues-api-client.service';

export { IssuesAPIClient } from './issues-api-client.service';
export { IssuesAPIClientInterface } from './issues-api-client.interface';
export { GuardedIssuesAPIClient } from './guarded-issues-api-client.service';

@NgModule({})
export class IssuesAPIClientModule {
  /**
   * Use this method in your root module to provide the IssuesAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<IssuesAPIClientModule> {
    return {
      ngModule: IssuesAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: IssuesAPIClient, useClass: GuardedIssuesAPIClient }] : [IssuesAPIClient]),
      ]
    };
  }
}
