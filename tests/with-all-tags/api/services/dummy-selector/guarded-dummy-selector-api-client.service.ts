/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, DummySelectorAPIClient } from './dummy-selector-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedDummySelectorAPIClient extends DummySelectorAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  get(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorViewModel> {
    return super.get(args, requestHttpOptions)
      .pipe(tap((res) => guards.isDummySelectorViewModel(res) || console.error(`TypeGuard for response 'DummySelectorViewModel' caught inconsistency.`, res)));
  }

  getSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorSettings> {
    return super.getSettings(args, requestHttpOptions)
      .pipe(tap((res) => guards.isDummySelectorSettings(res) || console.error(`TypeGuard for response 'DummySelectorSettings' caught inconsistency.`, res)));
  }

  putSettings(
    args: {
      organizerTaskElementId: number,
      betriebSelectorSettings: models.DummySelectorSettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    return super.putSettings(args, requestHttpOptions)
      .pipe(tap((res) => guards.isObject(res) || console.error(`TypeGuard for response 'Object' caught inconsistency.`, res)));
  }

  deleteSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    return super.deleteSettings(args, requestHttpOptions)
      .pipe(tap((res) => guards.isObject(res) || console.error(`TypeGuard for response 'Object' caught inconsistency.`, res)));
  }

}
