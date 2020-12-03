/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './events-api-client.service';
import { GuardedEventsAPIClient } from './guarded-events-api-client.service';

export { EventsAPIClient } from './events-api-client.service';
export { EventsAPIClientInterface } from './events-api-client.interface';
export { GuardedEventsAPIClient } from './guarded-events-api-client.service';

@NgModule({})
export class EventsAPIClientModule {
  /**
   * Use this method in your root module to provide the EventsAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<EventsAPIClientModule> {
    return {
      ngModule: EventsAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: EventsAPIClient, useClass: GuardedEventsAPIClient }] : [EventsAPIClient]),
      ]
    };
  }
}
