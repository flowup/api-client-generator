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

  firestoreProjectsDatabasesDocumentsBatchGet(body: models.BatchGetDocumentsRequest, database: string, options?: HttpOptions): Observable<models.BatchGetDocumentsResponse> {
    const path = `/${database}/documents:batchGet`;
    options = {...this.options, ...options};

    return this.sendRequest<models.BatchGetDocumentsResponse>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsBeginTransaction(body: models.BeginTransactionRequest, database: string, options?: HttpOptions): Observable<models.BeginTransactionResponse> {
    const path = `/${database}/documents:beginTransaction`;
    options = {...this.options, ...options};

    return this.sendRequest<models.BeginTransactionResponse>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsCommit(body: models.CommitRequest, database: string, options?: HttpOptions): Observable<models.CommitResponse> {
    const path = `/${database}/documents:commit`;
    options = {...this.options, ...options};

    return this.sendRequest<models.CommitResponse>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsListen(body: models.ListenRequest, database: string, options?: HttpOptions): Observable<models.ListenResponse> {
    const path = `/${database}/documents:listen`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ListenResponse>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsRollback(body: models.RollbackRequest, database: string, options?: HttpOptions): Observable<models.Empty> {
    const path = `/${database}/documents:rollback`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Empty>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsWrite(body: models.WriteRequest, database: string, options?: HttpOptions): Observable<models.WriteResponse> {
    const path = `/${database}/documents:write`;
    options = {...this.options, ...options};

    return this.sendRequest<models.WriteResponse>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesIndexesDelete(currentDocumentExists: boolean, currentDocumentUpdateTime: string, name: string, options?: HttpOptions): Observable<models.Empty> {
    const path = `/${name}`;
    options = {...this.options, ...options};

    if (currentDocumentExists) {
      options.params = options.params.set('currentDocument.exists', String(currentDocumentExists));
    }
    if (currentDocumentUpdateTime) {
      options.params = options.params.set('currentDocument.updateTime', String(currentDocumentUpdateTime));
    }
    return this.sendRequest<models.Empty>('DELETE', path, options);
  }

  firestoreProjectsDatabasesIndexesGet(maskFieldPaths: any[], name: string, readTime: string, transaction: string, options?: HttpOptions): Observable<models.Index> {
    const path = `/${name}`;
    options = {...this.options, ...options};

    if (maskFieldPaths) {
      Object.keys(maskFieldPaths).map(value => {
        options.params = options.params.append('mask.fieldPaths', `${value}`);
      });
    }
    if (readTime) {
      options.params = options.params.set('readTime', String(readTime));
    }
    if (transaction) {
      options.params = options.params.set('transaction', String(transaction));
    }
    return this.sendRequest<models.Index>('GET', path, options);
  }

  firestoreProjectsDatabasesDocumentsPatch(body: models.Document, currentDocumentExists: boolean, currentDocumentUpdateTime: string, maskFieldPaths: any[], name: string, updateMaskFieldPaths: any[], options?: HttpOptions): Observable<models.Document> {
    const path = `/${name}`;
    options = {...this.options, ...options};

    if (currentDocumentExists) {
      options.params = options.params.set('currentDocument.exists', String(currentDocumentExists));
    }
    if (currentDocumentUpdateTime) {
      options.params = options.params.set('currentDocument.updateTime', String(currentDocumentUpdateTime));
    }
    if (maskFieldPaths) {
      Object.keys(maskFieldPaths).map(value => {
        options.params = options.params.append('mask.fieldPaths', `${value}`);
      });
    }
    if (updateMaskFieldPaths) {
      Object.keys(updateMaskFieldPaths).map(value => {
        options.params = options.params.append('updateMask.fieldPaths', `${value}`);
      });
    }
    return this.sendRequest<models.Document>('PATCH', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesIndexesList(filter: string, pageSize: number, pageToken: string, parent: string, options?: HttpOptions): Observable<models.ListIndexesResponse> {
    const path = `/${parent}/indexes`;
    options = {...this.options, ...options};

    if (filter) {
      options.params = options.params.set('filter', String(filter));
    }
    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (pageToken) {
      options.params = options.params.set('pageToken', String(pageToken));
    }
    return this.sendRequest<models.ListIndexesResponse>('GET', path, options);
  }

  firestoreProjectsDatabasesIndexesCreate(body: models.Index, parent: string, options?: HttpOptions): Observable<models.Operation> {
    const path = `/${parent}/indexes`;
    options = {...this.options, ...options};

    return this.sendRequest<models.Operation>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsList(collectionId: string, maskFieldPaths: any[], orderBy: string, pageSize: number, pageToken: string, parent: string, readTime: string, showMissing: boolean, transaction: string, options?: HttpOptions): Observable<models.ListDocumentsResponse> {
    const path = `/${parent}/${collectionId}`;
    options = {...this.options, ...options};

    if (maskFieldPaths) {
      Object.keys(maskFieldPaths).map(value => {
        options.params = options.params.append('mask.fieldPaths', `${value}`);
      });
    }
    if (orderBy) {
      options.params = options.params.set('orderBy', String(orderBy));
    }
    if (pageSize) {
      options.params = options.params.set('pageSize', String(pageSize));
    }
    if (pageToken) {
      options.params = options.params.set('pageToken', String(pageToken));
    }
    if (readTime) {
      options.params = options.params.set('readTime', String(readTime));
    }
    if (showMissing) {
      options.params = options.params.set('showMissing', String(showMissing));
    }
    if (transaction) {
      options.params = options.params.set('transaction', String(transaction));
    }
    return this.sendRequest<models.ListDocumentsResponse>('GET', path, options);
  }

  firestoreProjectsDatabasesDocumentsCreateDocument(body: models.Document, collectionId: string, documentId: string, maskFieldPaths: any[], parent: string, options?: HttpOptions): Observable<models.Document> {
    const path = `/${parent}/${collectionId}`;
    options = {...this.options, ...options};

    if (documentId) {
      options.params = options.params.set('documentId', String(documentId));
    }
    if (maskFieldPaths) {
      Object.keys(maskFieldPaths).map(value => {
        options.params = options.params.append('mask.fieldPaths', `${value}`);
      });
    }
    return this.sendRequest<models.Document>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsListCollectionIds(body: models.ListCollectionIdsRequest, parent: string, options?: HttpOptions): Observable<models.ListCollectionIdsResponse> {
    const path = `/${parent}:listCollectionIds`;
    options = {...this.options, ...options};

    return this.sendRequest<models.ListCollectionIdsResponse>('POST', path, options, JSON.stringify(body));
  }

  firestoreProjectsDatabasesDocumentsRunQuery(body: models.RunQueryRequest, parent: string, options?: HttpOptions): Observable<models.RunQueryResponse> {
    const path = `/${parent}:runQuery`;
    options = {...this.options, ...options};

    return this.sendRequest<models.RunQueryResponse>('POST', path, options, JSON.stringify(body));
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return Observable.throw(`Unsupported request: ${method}`);
    }
  }
}
