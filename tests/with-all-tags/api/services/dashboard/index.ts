/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { DashboardAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './dashboard-api-client.service';
import { GuardedDashboardAPIClient } from './guarded-dashboard-api-client.service';

export { DashboardAPIClient } from './dashboard-api-client.service';
export { DashboardAPIClientInterface } from './dashboard-api-client.interface';
export { GuardedDashboardAPIClient } from './guarded-dashboard-api-client.service';

@NgModule({})
export class DashboardAPIClientModule {
  /**
   * Use this method in your root module to provide the DashboardAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<DashboardAPIClientModule> {
    return {
      ngModule: DashboardAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: DashboardAPIClient, useClass: GuardedDashboardAPIClient }] : [DashboardAPIClient]),
      ]
    };
  }
}
