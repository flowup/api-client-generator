/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { APIClientInterface } from './api-client.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { USE_DOMAIN, USE_HTTP_OPTIONS, APIClient } from './api-client.service';
import { DefaultHttpOptions, HttpOptions } from './types';

import * as models from './models';
import * as guards from './guards';

@Injectable()
export class GuardedAPIClient extends APIClient implements APIClientInterface {

  constructor(
    readonly httpClient: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    super(httpClient, domain, options);
  }

  /**
   * Find pet by ID
   * Returns a single pet
   * Response generated for [ 200 ] HTTP response code.
   */
  getPetById(
    args: Exclude<APIClientInterface['getPetByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Pet>;
  getPetById(
    args: Exclude<APIClientInterface['getPetByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Pet>>;
  getPetById(
    args: Exclude<APIClientInterface['getPetByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Pet>>;
  getPetById(
    args: Exclude<APIClientInterface['getPetByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Pet | HttpResponse<models.Pet> | HttpEvent<models.Pet>> {

    return super.getPetById(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isPet(res) || console.error(`TypeGuard for response 'models.Pet' caught inconsistency.`, res)));
  }

  /**
   * Updates a pet in the store with form data
   * Response generated for [ default ] HTTP response code.
   */
  updatePetWithForm(
    args: Exclude<APIClientInterface['updatePetWithFormParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  updatePetWithForm(
    args: Exclude<APIClientInterface['updatePetWithFormParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  updatePetWithForm(
    args: Exclude<APIClientInterface['updatePetWithFormParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  updatePetWithForm(
    args: Exclude<APIClientInterface['updatePetWithFormParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.updatePetWithForm(args, requestHttpOptions, observe);
  }

  /**
   * Deletes a pet
   * Response generated for [ default ] HTTP response code.
   */
  deletePet(
    args: Exclude<APIClientInterface['deletePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deletePet(
    args: Exclude<APIClientInterface['deletePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deletePet(
    args: Exclude<APIClientInterface['deletePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deletePet(
    args: Exclude<APIClientInterface['deletePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deletePet(args, requestHttpOptions, observe);
  }

  /**
   * uploads an image
   * Response generated for [ 200 ] HTTP response code.
   */
  uploadFile(
    args: Exclude<APIClientInterface['uploadFileParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.ApiResponse>;
  uploadFile(
    args: Exclude<APIClientInterface['uploadFileParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.ApiResponse>>;
  uploadFile(
    args: Exclude<APIClientInterface['uploadFileParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.ApiResponse>>;
  uploadFile(
    args: Exclude<APIClientInterface['uploadFileParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.ApiResponse | HttpResponse<models.ApiResponse> | HttpEvent<models.ApiResponse>> {

    return super.uploadFile(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isApiResponse(res) || console.error(`TypeGuard for response 'models.ApiResponse' caught inconsistency.`, res)));
  }

  /**
   * Add a new pet to the store
   * Response generated for [ default ] HTTP response code.
   */
  addPet(
    args: Exclude<APIClientInterface['addPetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  addPet(
    args: Exclude<APIClientInterface['addPetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  addPet(
    args: Exclude<APIClientInterface['addPetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  addPet(
    args: Exclude<APIClientInterface['addPetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.addPet(args, requestHttpOptions, observe);
  }

  /**
   * Update an existing pet
   * Response generated for [ default ] HTTP response code.
   */
  updatePet(
    args: Exclude<APIClientInterface['updatePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  updatePet(
    args: Exclude<APIClientInterface['updatePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  updatePet(
    args: Exclude<APIClientInterface['updatePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  updatePet(
    args: Exclude<APIClientInterface['updatePetParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.updatePet(args, requestHttpOptions, observe);
  }

  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   * Response generated for [ 200 ] HTTP response code.
   */
  findPetsByStatus(
    args: Exclude<APIClientInterface['findPetsByStatusParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Pet[]>;
  findPetsByStatus(
    args: Exclude<APIClientInterface['findPetsByStatusParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Pet[]>>;
  findPetsByStatus(
    args: Exclude<APIClientInterface['findPetsByStatusParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Pet[]>>;
  findPetsByStatus(
    args: Exclude<APIClientInterface['findPetsByStatusParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Pet[] | HttpResponse<models.Pet[]> | HttpEvent<models.Pet[]>> {

    return super.findPetsByStatus(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: any) => guards.isPet(item)) ) || console.error(`TypeGuard for response 'models.Pet[]' caught inconsistency.`, res)));
  }

  /**
   * Finds Pets by tags
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @deprecated this method has been deprecated and may be removed in future.
   * Response generated for [ 200 ] HTTP response code.
   */
  findPetsByTags(
    args: Exclude<APIClientInterface['findPetsByTagsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Pet[]>;
  findPetsByTags(
    args: Exclude<APIClientInterface['findPetsByTagsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Pet[]>>;
  findPetsByTags(
    args: Exclude<APIClientInterface['findPetsByTagsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Pet[]>>;
  findPetsByTags(
    args: Exclude<APIClientInterface['findPetsByTagsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Pet[] | HttpResponse<models.Pet[]> | HttpEvent<models.Pet[]>> {

    return super.findPetsByTags(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: any) => guards.isPet(item)) ) || console.error(`TypeGuard for response 'models.Pet[]' caught inconsistency.`, res)));
  }

  /**
   * Returns pet inventories by status
   * Returns a map of status codes to quantities
   * Response generated for [ 200 ] HTTP response code.
   */
  getInventory(
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<{ [key: string]: number }>;
  getInventory(
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<{ [key: string]: number }>>;
  getInventory(
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<{ [key: string]: number }>>;
  getInventory(
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<{ [key: string]: number } | HttpResponse<{ [key: string]: number }> | HttpEvent<{ [key: string]: number }>> {

    return super.getInventory(requestHttpOptions, observe)
      .pipe(tap((res: any) => Object.values(res).every((value: any) => typeof value === 'number') || console.error(`TypeGuard for response '{ [key: string]: number }' caught inconsistency.`, res)));
  }

  /**
   * Find purchase order by ID
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrderById(
    args: Exclude<APIClientInterface['getOrderByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Order>;
  getOrderById(
    args: Exclude<APIClientInterface['getOrderByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Order>>;
  getOrderById(
    args: Exclude<APIClientInterface['getOrderByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Order>>;
  getOrderById(
    args: Exclude<APIClientInterface['getOrderByIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Order | HttpResponse<models.Order> | HttpEvent<models.Order>> {

    return super.getOrderById(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isOrder(res) || console.error(`TypeGuard for response 'models.Order' caught inconsistency.`, res)));
  }

  /**
   * Delete purchase order by ID
   * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   * Response generated for [ default ] HTTP response code.
   */
  deleteOrder(
    args: Exclude<APIClientInterface['deleteOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteOrder(
    args: Exclude<APIClientInterface['deleteOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteOrder(
    args: Exclude<APIClientInterface['deleteOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteOrder(
    args: Exclude<APIClientInterface['deleteOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteOrder(args, requestHttpOptions, observe);
  }

  /**
   * Place an order for a pet
   * Response generated for [ 200 ] HTTP response code.
   */
  placeOrder(
    args: Exclude<APIClientInterface['placeOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Order>;
  placeOrder(
    args: Exclude<APIClientInterface['placeOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Order>>;
  placeOrder(
    args: Exclude<APIClientInterface['placeOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Order>>;
  placeOrder(
    args: Exclude<APIClientInterface['placeOrderParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Order | HttpResponse<models.Order> | HttpEvent<models.Order>> {

    return super.placeOrder(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isOrder(res) || console.error(`TypeGuard for response 'models.Order' caught inconsistency.`, res)));
  }

  /**
   * Get user by user name
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserByName(
    args: Exclude<APIClientInterface['getUserByNameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.User>;
  getUserByName(
    args: Exclude<APIClientInterface['getUserByNameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.User>>;
  getUserByName(
    args: Exclude<APIClientInterface['getUserByNameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.User>>;
  getUserByName(
    args: Exclude<APIClientInterface['getUserByNameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.User | HttpResponse<models.User> | HttpEvent<models.User>> {

    return super.getUserByName(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'models.User' caught inconsistency.`, res)));
  }

  /**
   * Updated user
   * This can only be done by the logged in user.
   * Response generated for [ default ] HTTP response code.
   */
  updateUser(
    args: Exclude<APIClientInterface['updateUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  updateUser(
    args: Exclude<APIClientInterface['updateUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  updateUser(
    args: Exclude<APIClientInterface['updateUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  updateUser(
    args: Exclude<APIClientInterface['updateUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.updateUser(args, requestHttpOptions, observe);
  }

  /**
   * Delete user
   * This can only be done by the logged in user.
   * Response generated for [ default ] HTTP response code.
   */
  deleteUser(
    args: Exclude<APIClientInterface['deleteUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUser(
    args: Exclude<APIClientInterface['deleteUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUser(
    args: Exclude<APIClientInterface['deleteUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteUser(
    args: Exclude<APIClientInterface['deleteUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteUser(args, requestHttpOptions, observe);
  }

  /**
   * Logs user into the system
   * Response generated for [ 200 ] HTTP response code.
   */
  loginUser(
    args: Exclude<APIClientInterface['loginUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<string>;
  loginUser(
    args: Exclude<APIClientInterface['loginUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<string>>;
  loginUser(
    args: Exclude<APIClientInterface['loginUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<string>>;
  loginUser(
    args: Exclude<APIClientInterface['loginUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<string | HttpResponse<string> | HttpEvent<string>> {

    return super.loginUser(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => typeof res === 'string' || console.error(`TypeGuard for response 'string' caught inconsistency.`, res)));
  }

  /**
   * Logs out current logged in user session
   * Response generated for [ default ] HTTP response code.
   */
  logoutUser(
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  logoutUser(
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  logoutUser(
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  logoutUser(
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.logoutUser(requestHttpOptions, observe);
  }

  /**
   * Create user
   * This can only be done by the logged in user.
   * Response generated for [ default ] HTTP response code.
   */
  createUser(
    args: Exclude<APIClientInterface['createUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  createUser(
    args: Exclude<APIClientInterface['createUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  createUser(
    args: Exclude<APIClientInterface['createUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  createUser(
    args: Exclude<APIClientInterface['createUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.createUser(args, requestHttpOptions, observe);
  }

  /**
   * Creates list of users with given input array
   * Response generated for [ default ] HTTP response code.
   */
  createUsersWithArrayInput(
    args: Exclude<APIClientInterface['createUsersWithArrayInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  createUsersWithArrayInput(
    args: Exclude<APIClientInterface['createUsersWithArrayInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  createUsersWithArrayInput(
    args: Exclude<APIClientInterface['createUsersWithArrayInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  createUsersWithArrayInput(
    args: Exclude<APIClientInterface['createUsersWithArrayInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.createUsersWithArrayInput(args, requestHttpOptions, observe);
  }

  /**
   * Creates list of users with given input array
   * Response generated for [ default ] HTTP response code.
   */
  createUsersWithListInput(
    args: Exclude<APIClientInterface['createUsersWithListInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  createUsersWithListInput(
    args: Exclude<APIClientInterface['createUsersWithListInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  createUsersWithListInput(
    args: Exclude<APIClientInterface['createUsersWithListInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  createUsersWithListInput(
    args: Exclude<APIClientInterface['createUsersWithListInputParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.createUsersWithListInput(args, requestHttpOptions, observe);
  }

}
