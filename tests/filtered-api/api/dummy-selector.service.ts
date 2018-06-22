/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class DummySelectorService {

  readonly options: APIHttpOptions;

  private readonly domain: string = `http://localhost:49801`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options: DefaultHttpOptions) {

    if (domain) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  get(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorViewModel> {
    const path = `/api/betriebselector/${args.organizerTaskElementId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.DummySelectorViewModel>('GET', path, options);
  }

  getSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorSettings> {
    const path = `/api/betriebselector/${args.organizerTaskElementId}/Settings`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<models.DummySelectorSettings>('GET', path, options);
  }

  putSettings(
    args: {
      organizerTaskElementId: number,
      betriebSelectorSettings: models.DummySelectorSettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/api/betriebselector/${args.organizerTaskElementId}/Settings`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.betriebSelectorSettings));
  }

  deleteSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any> {
    const path = `/api/betriebselector/${args.organizerTaskElementId}/Settings`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    return this.sendRequest<any>('DELETE', path, options);
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
