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
      .pipe(tap((res: any) => guards.isItemList(res) || console.error(`TypeGuard for response 'ItemList' caught inconsistency.`, res)));
  }

  getItemModels(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getItemModels(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isobject(res) || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    return super.getPetsId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isPet(res) || console.error(`TypeGuard for response 'Pet' caught inconsistency.`, res)));
  }

  getCustomers(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Customer[] | null> {
    return super.getCustomers(requestHttpOptions)
      .pipe(tap((res: any) => guards.isCustomer(res) || console.error(`TypeGuard for response 'Customer' caught inconsistency.`, res)));
  }

  getDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Dictionary> {
    return super.getDictionaries(requestHttpOptions)
      .pipe(tap((res: any) => guards.isDictionary(res) || console.error(`TypeGuard for response 'Dictionary' caught inconsistency.`, res)));
  }

  getFileId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    return super.getFileId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isFile(res) || console.error(`TypeGuard for response 'File' caught inconsistency.`, res)));
  }

  getRandomObject(
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getRandomObject(requestHttpOptions)
      .pipe(tap((res: any) => guards.isobject(res) || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getRandomModel(
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    return super.getRandomModel(requestHttpOptions)
      .pipe(tap((res: any) => guards.isAny(res) || console.error(`TypeGuard for response 'Any' caught inconsistency.`, res)));
  }

  getRandomString(
    requestHttpOptions?: HttpOptions
  ): Observable<string> {
    return super.getRandomString(requestHttpOptions)
      .pipe(tap((res: any) => guards.isstring(res) || console.error(`TypeGuard for response 'string' caught inconsistency.`, res)));
  }

}
