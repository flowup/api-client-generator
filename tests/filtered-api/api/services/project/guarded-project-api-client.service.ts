/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, ProjectAPIClient } from './project-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedProjectAPIClient extends ProjectAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getProjectTypes(
    requestHttpOptions?: HttpOptions
  ): Observable<models.ProjectTypeViewModel[]> {
    return super.getProjectTypes(requestHttpOptions)
      .pipe(tap((res: any) => guards.isProjectTypeViewModel[](res) || console.error(`TypeGuard for response 'models.ProjectTypeViewModel[]' caught inconsistency.`, res)));
  }

}
