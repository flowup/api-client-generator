/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from '../../types';
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
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isWidgetTypeViewModel(item)) ) || console.error(`TypeGuard for response 'models.WidgetTypeViewModel[]' caught inconsistency.`, res)));
  }

  get(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DashboardViewModel> {
    return super.get(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDashboardViewModel(res) || console.error(`TypeGuard for response 'models.DashboardViewModel' caught inconsistency.`, res)));
  }

  getSettings(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RowModel[]> {
    return super.getSettings(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isRowModel(item)) ) || console.error(`TypeGuard for response 'models.RowModel[]' caught inconsistency.`, res)));
  }

  putSettings(
    args: {
      dashboardId: number,
      rows: models.RowModel[],
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.putSettings(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

}
