/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, DashboardAPIClient } from './dashboard-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedDashboardAPIClient extends DashboardAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getWidgetTypes(
    requestHttpOptions?: HttpOptions
  ): Observable<models.WidgetTypeViewModel[]> {
    return super.getWidgetTypes(requestHttpOptions)
      .pipe(tap((res) => guards.isWidgetTypeViewModel(res) || console.error(`TypeGuard for response 'WidgetTypeViewModel' caught inconsistency.`, res)));
  }

  get(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DashboardViewModel> {
    return super.get(args, requestHttpOptions)
      .pipe(tap((res) => guards.isDashboardViewModel(res) || console.error(`TypeGuard for response 'DashboardViewModel' caught inconsistency.`, res)));
  }

  getSettings(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RowModel[]> {
    return super.getSettings(args, requestHttpOptions)
      .pipe(tap((res) => guards.isRowModel(res) || console.error(`TypeGuard for response 'RowModel' caught inconsistency.`, res)));
  }

  putSettings(
    args: {
      dashboardId: number,
      rows: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    return super.putSettings(args, requestHttpOptions)
      .pipe(tap((res) => guards.isObject(res) || console.error(`TypeGuard for response 'Object' caught inconsistency.`, res)));
  }

}
