/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { APIClientInterface } from './';
import { DefaultHttpOptions, HttpOptions } from './types';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('APIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('APIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient implements APIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `https://petstore.swagger.io/v2`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {

    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  /**
   * Returns a single pet
   * Response generated for [ 200 ] HTTP response code.
   */
  getPetById(
    args: {
      petId: number,  // ID of pet to return
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet> {
    const path = `/pet/${args.petId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Pet>('GET', path, options);
  }

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  updatePetWithForm(
    args: {
      petId: number,  // ID of pet that needs to be updated
      name?: string,  // (optional) Updated name of the pet
      status?: string,  // (optional) Updated status of the pet
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/pet/${args.petId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    const formData = new FormData();
    if (args.name != undefined) {
      formData.append('name', args.name);
    }
    if (args.status != undefined) {
      formData.append('status', args.status);
    }

    return this.sendRequest<void>('POST', path, options, formData);
  }

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  deletePet(
    args: {
      apiKey?: string,
      petId: number,  // Pet id to delete
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/pet/${args.petId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('apiKey' in args) {
      options.headers = options.headers.set('api_key', String(args.apiKey));
    }
    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  uploadFile(
    args: {
      petId: number,  // ID of pet to update
      additionalMetadata?: string,  // (optional) Additional data to pass to server
      file?: File,  // (optional) file to upload
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ApiResponse> {
    const path = `/pet/${args.petId}/uploadImage`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    const formData = new FormData();
    if (args.additionalMetadata != undefined) {
      formData.append('additionalMetadata', args.additionalMetadata);
    }
    if (args.file != undefined) {
      formData.append('file', args.file);
    }

    return this.sendRequest<models.ApiResponse>('POST', path, options, formData);
  }

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  addPet(
    args: {
      body: models.Pet,  // Pet object that needs to be added to the store
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/pet`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  updatePet(
    args: {
      body: models.Pet,  // Pet object that needs to be added to the store
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/pet`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * Multiple status values can be provided with comma separated strings
   * Response generated for [ 200 ] HTTP response code.
   */
  findPetsByStatus(
    args: {
      status: ('available' | 'pending' | 'sold')[],  // Status values that need to be considered for filter
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    const path = `/pet/findByStatus`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('status' in args) {
      options.params = options.params.set('status', String(args.status));
    }
    return this.sendRequest<models.Pet[]>('GET', path, options);
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * Response generated for [ 200 ] HTTP response code.
   */
  findPetsByTags(
    args: {
      tags: string[],  // Tags to filter by
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    const path = `/pet/findByTags`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('tags' in args) {
      options.params = options.params.set('tags', String(args.tags));
    }
    return this.sendRequest<models.Pet[]>('GET', path, options);
  }

  /**
   * Returns a map of status codes to quantities
   * Response generated for [ 200 ] HTTP response code.
   */
  getInventory(
    requestHttpOptions?: HttpOptions
  ): Observable<{ [key: string]: number }> {
    const path = `/store/inventory`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<{ [key: string]: number }>('GET', path, options);
  }

  /**
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrderById(
    args: {
      orderId: number,  // ID of pet that needs to be fetched
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Order> {
    const path = `/store/order/${args.orderId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Order>('GET', path, options);
  }

  /**
   * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   * Response generated for [ missing ] HTTP response code.
   */
  deleteOrder(
    args: {
      orderId: number,  // ID of the order that needs to be deleted
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/store/order/${args.orderId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  placeOrder(
    args: {
      body: models.Order,  // order placed for purchasing the pet
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Order> {
    const path = `/store/order`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Order>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserByName(
    args: {
      username: string,  // The name that needs to be fetched. Use user1 for testing. 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/user/${args.username}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.User>('GET', path, options);
  }

  /**
   * This can only be done by the logged in user.
   * Response generated for [ missing ] HTTP response code.
   */
  updateUser(
    args: {
      username: string,  // name that need to be updated
      body: models.User,  // Updated user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/${args.username}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('PUT', path, options, JSON.stringify(args.body));
  }

  /**
   * This can only be done by the logged in user.
   * Response generated for [ missing ] HTTP response code.
   */
  deleteUser(
    args: {
      username: string,  // The name that needs to be deleted
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/${args.username}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  loginUser(
    args: {
      username: string,  // The user name for login
      password: string,  // The password for login in clear text
    },
    requestHttpOptions?: HttpOptions
  ): Observable<string> {
    const path = `/user/login`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('username' in args) {
      options.params = options.params.set('username', String(args.username));
    }
    if ('password' in args) {
      options.params = options.params.set('password', String(args.password));
    }
    return this.sendRequest<string>('GET', path, options);
  }

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  logoutUser(
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/logout`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('GET', path, options);
  }

  /**
   * This can only be done by the logged in user.
   * Response generated for [ missing ] HTTP response code.
   */
  createUser(
    args: {
      body: models.User,  // Created user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  createUsersWithArrayInput(
    args: {
      body: models.User[],  // List of user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/createWithArray`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  createUsersWithListInput(
    args: {
      body: models.User[],  // List of user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/createWithList`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('POST', path, options, JSON.stringify(args.body));
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
