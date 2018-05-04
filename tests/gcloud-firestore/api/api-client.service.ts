/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpOptions } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('USE_HTTP_OPTIONS');

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient {

  readonly options: HttpOptions;
  private domain: string = `https://firestore.googleapis.com/v1beta1`;

  constructor(private http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options: HttpOptions) {

    if (domain) {
      this.domain = domain;
    }

    this.options = {
      headers: options && options.headers ? options.headers : new HttpHeaders(),
      params: options && options.params ? options.params : new HttpParams()
    };
  }

  firestoreProjectsDatabasesDocumentsBatchGet(
    args: {
      body?: models.BatchGetDocumentsRequest,
      database: string,
    },
    options?: HttpOptions
  ): Observable<models.BatchGetDocumentsResponse> {
    const path = `/${args.database}/documents:batchGet`;
    options = {...this.options, ...options};

    return this.sendRequest<models.BatchGetDocumentsResponse>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsBeginTransaction(
    args: {
      body?: models.BeginTransactionRequest,
      database: string,
    },
    options?: HttpOptions
  ): Observable<models.BeginTransactionResponse> {
    const path = `/${args.database}/documents:beginTransaction`;
    options = {...this.options, ...options};

    return this.sendRequest<models.BeginTransactionResponse>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsCommit(
    args: {
      body?: models.CommitRequest,
      database: string,
    },
    options?: HttpOptions
  ): Observable<models.CommitResponse> {
    const path = `/${args.database}/documents:commit`;
    options = {...this.options, ...options};

    return this.sendRequest<models.CommitResponse>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsListen(
    args: {
      body?: models.ListenRequest,
      database: string,
    },
    options?: HttpOptions
  ): Observable<models.ListenResponse> {
    const path = `/${args.database}/documents:listen`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ListenResponse>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsRollback(
    args: {
      body?: models.RollbackRequest,
      database: string,
    },
    options?: HttpOptions
  ): Observable<models.Empty> {
    const path = `/${args.database}/documents:rollback`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Empty>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsWrite(
    args: {
      body?: models.WriteRequest,
      database: string,
    },
    options?: HttpOptions
  ): Observable<models.WriteResponse> {
    const path = `/${args.database}/documents:write`;
    options = {...this.options, ...options};

    return this.sendRequest<models.WriteResponse>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesIndexesDelete(
    args: {
      currentDocumentExists?: boolean,
      currentDocumentUpdateTime?: string,
      name: string,
    },
    options?: HttpOptions
  ): Observable<models.Empty> {
    const path = `/${args.name}`;
    options = {...this.options, ...options};

    if ('currentDocumentExists' in args) {
      options.params = options.params.set('currentDocument.exists', String(args.currentDocumentExists));
    }
    if ('currentDocumentUpdateTime' in args) {
      options.params = options.params.set('currentDocument.updateTime', String(args.currentDocumentUpdateTime));
    }
    return this.sendRequest<models.Empty>('DELETE', path, options);
  }

  firestoreProjectsDatabasesIndexesGet(
    args: {
      maskFieldPaths?: string[],
      name: string,
      readTime?: string,
      transaction?: string,
    },
    options?: HttpOptions
  ): Observable<models.Index> {
    const path = `/${args.name}`;
    options = {...this.options, ...options};

    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
      }
    }
    if ('readTime' in args) {
      options.params = options.params.set('readTime', String(args.readTime));
    }
    if ('transaction' in args) {
      options.params = options.params.set('transaction', String(args.transaction));
    }
    return this.sendRequest<models.Index>('GET', path, options);
  }

  firestoreProjectsDatabasesDocumentsPatch(
    args: {
      body?: models.Document,
      currentDocumentExists?: boolean,
      currentDocumentUpdateTime?: string,
      maskFieldPaths?: string[],
      name: string,
      updateMaskFieldPaths?: string[],
    },
    options?: HttpOptions
  ): Observable<models.Document> {
    const path = `/${args.name}`;
    options = {...this.options, ...options};

    if ('currentDocumentExists' in args) {
      options.params = options.params.set('currentDocument.exists', String(args.currentDocumentExists));
    }
    if ('currentDocumentUpdateTime' in args) {
      options.params = options.params.set('currentDocument.updateTime', String(args.currentDocumentUpdateTime));
    }
    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
      }
    }
    if ('updateMaskFieldPaths' in args) {
      if (args.updateMaskFieldPaths && args.updateMaskFieldPaths.length) {
        options.params = args.updateMaskFieldPaths.reduce((acc, cur) => acc.append('updateMask.fieldPaths', `${cur}`), options.params);
      }
    }
    return this.sendRequest<models.Document>('PATCH', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesIndexesList(
    args: {
      filter?: string,
      pageSize?: number,
      pageToken?: string,
      parent: string,
    },
    options?: HttpOptions
  ): Observable<models.ListIndexesResponse> {
    const path = `/${args.parent}/indexes`;
    options = {...this.options, ...options};

    if ('filter' in args) {
      options.params = options.params.set('filter', String(args.filter));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('pageToken' in args) {
      options.params = options.params.set('pageToken', String(args.pageToken));
    }
    return this.sendRequest<models.ListIndexesResponse>('GET', path, options);
  }

  firestoreProjectsDatabasesIndexesCreate(
    args: {
      body?: models.Index,
      parent: string,
    },
    options?: HttpOptions
  ): Observable<models.Operation> {
    const path = `/${args.parent}/indexes`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Operation>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsList(
    args: {
      collectionId: string,
      maskFieldPaths?: string[],
      orderBy?: string,
      pageSize?: number,
      pageToken?: string,
      parent: string,
      readTime?: string,
      showMissing?: boolean,
      transaction?: string,
    },
    options?: HttpOptions
  ): Observable<models.ListDocumentsResponse> {
    const path = `/${args.parent}/${args.collectionId}`;
    options = {...this.options, ...options};

    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
      }
    }
    if ('orderBy' in args) {
      options.params = options.params.set('orderBy', String(args.orderBy));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('pageToken' in args) {
      options.params = options.params.set('pageToken', String(args.pageToken));
    }
    if ('readTime' in args) {
      options.params = options.params.set('readTime', String(args.readTime));
    }
    if ('showMissing' in args) {
      options.params = options.params.set('showMissing', String(args.showMissing));
    }
    if ('transaction' in args) {
      options.params = options.params.set('transaction', String(args.transaction));
    }
    return this.sendRequest<models.ListDocumentsResponse>('GET', path, options);
  }

  firestoreProjectsDatabasesDocumentsCreateDocument(
    args: {
      body?: models.Document,
      collectionId: string,
      documentId?: string,
      maskFieldPaths?: string[],
      parent: string,
    },
    options?: HttpOptions
  ): Observable<models.Document> {
    const path = `/${args.parent}/${args.collectionId}`;
    options = {...this.options, ...options};

    if ('documentId' in args) {
      options.params = options.params.set('documentId', String(args.documentId));
    }
    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
      }
    }
    return this.sendRequest<models.Document>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsListCollectionIds(
    args: {
      body?: models.ListCollectionIdsRequest,
      parent: string,
    },
    options?: HttpOptions
  ): Observable<models.ListCollectionIdsResponse> {
    const path = `/${args.parent}:listCollectionIds`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ListCollectionIdsResponse>('POST', path, options, JSON.stringify(args.body));
  }

  firestoreProjectsDatabasesDocumentsRunQuery(
    args: {
      body?: models.RunQueryRequest,
      parent: string,
    },
    options?: HttpOptions
  ): Observable<models.RunQueryResponse> {
    const path = `/${args.parent}:runQuery`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RunQueryResponse>('POST', path, options, JSON.stringify(args.body));
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
        return Observable.throw(`Unsupported request: ${method}`);
    }
  }
}
