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

  getPetById(
    args: {
      petId: number,  // ID of pet to return
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet> {
    return super.getPetById(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isPet(res) || console.error(`TypeGuard for response 'models.Pet' caught inconsistency.`, res)));
  }

  uploadFile(
    args: {
      petId: number,  // ID of pet to update
      additionalMetadata?: string,  // (optional) Additional data to pass to server
      file?: File,  // (optional) file to upload
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ApiResponse> {
    return super.uploadFile(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isApiResponse(res) || console.error(`TypeGuard for response 'models.ApiResponse' caught inconsistency.`, res)));
  }

  findPetsByStatus(
    args: {
      status: string[],  // Status values that need to be considered for filter
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    return super.findPetsByStatus(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isPet[](res) || console.error(`TypeGuard for response 'models.Pet[]' caught inconsistency.`, res)));
  }

  findPetsByTags(
    args: {
      tags: string[],  // Tags to filter by
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    return super.findPetsByTags(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isPet[](res) || console.error(`TypeGuard for response 'models.Pet[]' caught inconsistency.`, res)));
  }

  getInventory(
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getInventory(requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getOrderById(
    args: {
      orderId: number,  // ID of pet that needs to be fetched
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Order> {
    return super.getOrderById(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isOrder(res) || console.error(`TypeGuard for response 'models.Order' caught inconsistency.`, res)));
  }

  placeOrder(
    args: {
      body: models.Order,  // order placed for purchasing the pet
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Order> {
    return super.placeOrder(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isOrder(res) || console.error(`TypeGuard for response 'models.Order' caught inconsistency.`, res)));
  }

  getUserByName(
    args: {
      username: string,  // The name that needs to be fetched. Use user1 for testing. 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    return super.getUserByName(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'models.User' caught inconsistency.`, res)));
  }

  loginUser(
    args: {
      username: string,  // The user name for login
      password: string,  // The password for login in clear text
    },
    requestHttpOptions?: HttpOptions
  ): Observable<string> {
    return super.loginUser(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'string' || console.error(`TypeGuard for response 'string' caught inconsistency.`, res)));
  }

}
