/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EventsAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './events-api-client.service';
import { GuardedEventsAPIClient } from './guarded-events-api-client.service';

export { EventsAPIClient } from './events-api-client.service';
export { EventsAPIClientInterface } from './events-api-client.interface';
export { GuardedEventsAPIClient } from './guarded-events-api-client.service';

/**
 * provided options, headers and params will be used as default for each request
 */
export interface DefaultHttpOptions {
  headers?: {[key: string]: string};
  params?: {[key: string]: string};
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface EventsAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class EventsAPIClientModule {
  /**
   * Use this method in your root module to provide the EventsAPIClientModule
   *
   * If you are not providing
   * @param { EventsAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: EventsAPIClientModuleConfig = {}): ModuleWithProviders<EventsAPIClientModule> {
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
