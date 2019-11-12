/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, APIClient } from './api-client.service';

import * as models from './models';
import * as guards from './guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAPIClient extends APIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getItems(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ItemList> {
    return super.getItems(args, requestHttpOptions)
      .pipe(tap((res) => guards.isItemList(res) || console.error(`TypeGuard for response 'ItemList' caught inconsistency.`, res)));
  }

  getItemModels(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object> {
    return super.getItemModels(args, requestHttpOptions)
      .pipe(tap((res) => guards.isObject(res) || console.error(`TypeGuard for response 'Object' caught inconsistency.`, res)));
  }

  getPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    return super.getPetsId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isPet(res) || console.error(`TypeGuard for response 'Pet' caught inconsistency.`, res)));
  }

  getCustomers(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Customer[] | null> {
    return super.getCustomers(requestHttpOptions)
      .pipe(tap((res) => guards.isCustomer(res) || console.error(`TypeGuard for response 'Customer' caught inconsistency.`, res)));
  }

  getDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Dictionary> {
    return super.getDictionaries(requestHttpOptions)
      .pipe(tap((res) => guards.isDictionary(res) || console.error(`TypeGuard for response 'Dictionary' caught inconsistency.`, res)));
  }

}
