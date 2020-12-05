/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { GitignoreAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './gitignore-api-client.service';
import { GuardedGitignoreAPIClient } from './guarded-gitignore-api-client.service';
import { APIClientModuleConfig } from '../../types';

export { GitignoreAPIClient } from './gitignore-api-client.service';
export { GitignoreAPIClientInterface } from './gitignore-api-client.interface';
export { GuardedGitignoreAPIClient } from './guarded-gitignore-api-client.service';

@NgModule({})
export class GitignoreAPIClientModule {
  /**
   * Use this method in your root module to provide the GitignoreAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<GitignoreAPIClientModule> {
    return {
      ngModule: GitignoreAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: GitignoreAPIClient, useClass: GuardedGitignoreAPIClient }] : [GitignoreAPIClient]),
      ]
    };
  }
}
