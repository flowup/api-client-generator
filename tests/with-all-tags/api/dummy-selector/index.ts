/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DummySelectorService, USE_DOMAIN, USE_HTTP_OPTIONS } from './api-client.service';

export * from './models';

export { DummySelectorService } from './dummy-selector.service';
export { DummySelectorInterface } from './dummy-selector.interface';

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

export interface DummySelectorServiceModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class DummySelectorServiceModule {
  /**
   * Use this method in your root module to provide the DummySelectorServiceModule
   *
   * If you are not providing
   * @param { DummySelectorServiceModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: DummySelectorServiceModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: DummySelectorServiceModule,
      providers: [
        ...(config.domain ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        DummySelectorService
      ]
    };
  }
}
