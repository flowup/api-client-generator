/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { NotificationsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './notifications-api-client.service';
import { GuardedNotificationsAPIClient } from './guarded-notifications-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { NotificationsAPIClient } from './notifications-api-client.service';
export { NotificationsAPIClientInterface } from './notifications-api-client.interface';
export { GuardedNotificationsAPIClient } from './guarded-notifications-api-client.service';

@NgModule({})
export class NotificationsAPIClientModule {
  /**
   * Use this method in your root module to provide the NotificationsAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<NotificationsAPIClientModule> {
    return {
      ngModule: NotificationsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: NotificationsAPIClient, useClass: GuardedNotificationsAPIClient }] : [NotificationsAPIClient]),
      ]
    };
  }
}
