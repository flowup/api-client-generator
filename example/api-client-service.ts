import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpObserve, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {
  Address,
  User,
  UserList,
} from '.';


interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] },
  observe?: HttpObserve,
  params?: HttpParams | { [param: string]: string | string[] },
  reportProgress?: boolean,
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
  withCredentials?: boolean,
}

@Injectable()
export class ApiClientService {

  private domain = 'http://localhost:8080';
  private httpOptions: HttpOptions = {
    headers: new HttpHeaders(),
    params: new HttpParams()
  };

  constructor(private http: HttpClient,
              @Optional() @Inject('domain') domain: string,
              @Optional() @Inject('httpOptions') httpOptions: HttpOptions) {
    if (domain) {
      this.domain = domain;
    }

    if (httpOptions) {
      this.httpOptions = httpOptions;
    }
  }

  editUser(id: string, body: User, options: HttpOptions = this.httpOptions): Observable<User> {
    const path = `/users/${id}`;

    return this.sendRequest<User>('PUT', path, options, JSON.stringify(body));
  }

  deleteUser(id: string, options: HttpOptions = this.httpOptions): Observable<{}> {
    const path = `/users/${id}`;

    return this.sendRequest<{}>('DELETE', path, options);
  }

  getCurrentUser(options: HttpOptions = this.httpOptions): Observable<User> {
    const path = `/users/me`;

    return this.sendRequest<User>('GET', path, options);
  }

  getAddressByUserID(id: string, options: HttpOptions = this.httpOptions): Observable<Address> {
    const path = `/users/${id}/address`;

    return this.sendRequest<Address>('GET', path, options);
  }

  listAllUsers(totalCount: number, offset: number, limit: number, options: HttpOptions = this.httpOptions): Observable<UserList> {
    const path = `/users`;

    if (totalCount) {
      options.params = options.params.set('totalCount', String(totalCount));
    }
    if (offset) {
      options.params = options.params.set('offset', String(offset));
    }
    if (limit) {
      options.params = options.params.set('limit', String(limit));
    }
    return this.sendRequest<UserList>('GET', path, options);
  }

  getUserByID(id: string, options: HttpOptions = this.httpOptions): Observable<User> {
    const path = `/users/${id}`;

    return this.sendRequest<User>('GET', path, options);
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    if (method === 'GET') {
      return this.http.get<T>(`${this.domain}${path}`, options);
    } else if (method === 'PUT') {
      return this.http.put<T>(`${this.domain}${path}`, body, options);
    } else if (method === 'POST') {
      return this.http.post<T>(`${this.domain}${path}`, body, options);
    } else if (method === 'DELETE') {
      return this.http.delete<T>(`${this.domain}${path}`, options);
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
