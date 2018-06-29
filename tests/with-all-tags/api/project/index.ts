/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ProjectService, USE_DOMAIN, USE_HTTP_OPTIONS } from './api-client.service';

export * from './models';

export { ProjectService } from './project.service';

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

export interface ProjectServiceModuleConfig {
  domain?: string;
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class ProjectServiceModule {
  /**
   * Use this method in your root module to provide the ProjectServiceModule
   *
   * If you are not providing
   * @param { ProjectServiceModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: ProjectServiceModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: ProjectServiceModule,
      providers: [
        ...(config.domain ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ProjectService
      ]
    };
  }
}