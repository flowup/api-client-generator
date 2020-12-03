/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { SearchAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './search-api-client.service';
import { GuardedSearchAPIClient } from './guarded-search-api-client.service';

export { SearchAPIClient } from './search-api-client.service';
export { SearchAPIClientInterface } from './search-api-client.interface';
export { GuardedSearchAPIClient } from './guarded-search-api-client.service';

@NgModule({})
export class SearchAPIClientModule {
  /**
   * Use this method in your root module to provide the SearchAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<SearchAPIClientModule> {
    return {
      ngModule: SearchAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: SearchAPIClient, useClass: GuardedSearchAPIClient }] : [SearchAPIClient]),
      ]
    };
  }
}
