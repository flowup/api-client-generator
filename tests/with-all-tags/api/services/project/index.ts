/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ProjectAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './project-api-client.service';
import { GuardedProjectAPIClient } from './guarded-project-api-client.service';

export { ProjectAPIClient } from './project-api-client.service';
export { ProjectAPIClientInterface } from './project-api-client.interface';
export { GuardedProjectAPIClient } from './guarded-project-api-client.service';

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

export interface ProjectAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class ProjectAPIClientModule {
  /**
   * Use this method in your root module to provide the ProjectAPIClientModule
   *
   * If you are not providing
   * @param { ProjectAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: ProjectAPIClientModuleConfig = {}): ModuleWithProviders<ProjectAPIClientModule> {
    return {
      ngModule: ProjectAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: ProjectAPIClient, useClass: GuardedProjectAPIClient }] : [ProjectAPIClient]),
      ]
    };
  }
}
