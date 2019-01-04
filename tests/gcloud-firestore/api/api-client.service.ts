/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, APIClientInterface } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('APIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('APIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient implements APIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `https://firestore.googleapis.com/v1beta1`;

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
   * Gets multiple documents.
   * 
   * 
   * Documents returned by this method are not guaranteed to be returned in the
   * same order that they were requested.
   */
  firestoreProjectsDatabasesDocumentsBatchGet(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.BatchGetDocumentsRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.BatchGetDocumentsResponse> {
    const path = `/${args.database}/documents:batchGet`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.BatchGetDocumentsResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Starts a new transaction.
   */
  firestoreProjectsDatabasesDocumentsBeginTransaction(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.BeginTransactionRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.BeginTransactionResponse> {
    const path = `/${args.database}/documents:beginTransaction`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.BeginTransactionResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Commits a transaction, while optionally updating documents.
   */
  firestoreProjectsDatabasesDocumentsCommit(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.CommitRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitResponse> {
    const path = `/${args.database}/documents:commit`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.CommitResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Listens to changes.
   */
  firestoreProjectsDatabasesDocumentsListen(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.ListenRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListenResponse> {
    const path = `/${args.database}/documents:listen`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.ListenResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Rolls back a transaction.
   */
  firestoreProjectsDatabasesDocumentsRollback(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.RollbackRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Empty> {
    const path = `/${args.database}/documents:rollback`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.Empty>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Streams batches of document updates and deletes, in order.
   */
  firestoreProjectsDatabasesDocumentsWrite(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.WriteRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.WriteResponse> {
    const path = `/${args.database}/documents:write`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.WriteResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Deletes an index.
   */
  firestoreProjectsDatabasesIndexesDelete(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      currentDocumentExists?: boolean,  // (optional) When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
      currentDocumentUpdateTime?: string,  // (optional) When set, the target document must exist and have been last updated at that time.
      name: string,  // The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Empty> {
    const path = `/${args.name}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    if ('currentDocumentExists' in args) {
      options.params = options.params.set('currentDocument.exists', String(args.currentDocumentExists));
    }
    if ('currentDocumentUpdateTime' in args) {
      options.params = options.params.set('currentDocument.updateTime', String(args.currentDocumentUpdateTime));
    }
    return this.sendRequest<models.Empty>('DELETE', path, options);
  }

  /**
   * Gets an index.
   */
  firestoreProjectsDatabasesIndexesGet(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      maskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
      name: string,  // The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
      readTime?: string,  // (optional) Reads the version of the document at the given time. This may not be older than 60 seconds.
      transaction?: string,  // (optional) Reads the document in a transaction.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Index> {
    const path = `/${args.name}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce<HttpParams>((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
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

  /**
   * Updates or inserts a document.
   */
  firestoreProjectsDatabasesDocumentsPatch(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.Document,
      currentDocumentExists?: boolean,  // (optional) When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
      currentDocumentUpdateTime?: string,  // (optional) When set, the target document must exist and have been last updated at that time.
      maskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
      name: string,  // The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
      updateMaskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Document> {
    const path = `/${args.name}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    if ('currentDocumentExists' in args) {
      options.params = options.params.set('currentDocument.exists', String(args.currentDocumentExists));
    }
    if ('currentDocumentUpdateTime' in args) {
      options.params = options.params.set('currentDocument.updateTime', String(args.currentDocumentUpdateTime));
    }
    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce<HttpParams>((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
      }
    }
    if ('updateMaskFieldPaths' in args) {
      if (args.updateMaskFieldPaths && args.updateMaskFieldPaths.length) {
        options.params = args.updateMaskFieldPaths.reduce<HttpParams>((acc, cur) => acc.append('updateMask.fieldPaths', `${cur}`), options.params);
      }
    }
    return this.sendRequest<models.Document>('PATCH', path, options, JSON.stringify(args.body));
  }

  /**
   * Lists the indexes that match the specified filters.
   */
  firestoreProjectsDatabasesIndexesList(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      filter?: string,
      pageSize?: number,  // (optional) The standard List page size.
      pageToken?: string,  // (optional) The standard List page token.
      parent: string,  // The database name. For example: `projects/{project_id}/databases/{database_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListIndexesResponse> {
    const path = `/${args.parent}/indexes`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
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

  /**
   * Creates the specified index.
   * A newly created index's initial state is `CREATING`. On completion of the
   * returned google.longrunning.Operation, the state will be `READY`.
   * If the index already exists, the call will return an `ALREADY_EXISTS`
   * status.
   * 
   * 
   * During creation, the process could result in an error, in which case the
   * index will move to the `ERROR` state. The process can be recovered by
   * fixing the data that caused the error, removing the index with
   * delete, then re-creating the index with
   * create.
   * 
   * 
   * Indexes with a single field cannot be created.
   */
  firestoreProjectsDatabasesIndexesCreate(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.Index,
      parent: string,  // The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Operation> {
    const path = `/${args.parent}/indexes`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.Operation>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Lists documents.
   */
  firestoreProjectsDatabasesDocumentsList(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      collectionId: string,  // The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`.
      maskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
      orderBy?: string,  // (optional) The order to sort results by. For example: `priority desc, name`.
      pageSize?: number,  // (optional) The maximum number of documents to return.
      pageToken?: string,  // (optional) The `next_page_token` value returned from a previous List request, if any.
      parent: string,  // The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
      readTime?: string,  // (optional) Reads documents as they were at the given time. This may not be older than 60 seconds.
      showMissing?: boolean,  // (optional) If the list should show missing documents. A missing document is a document that does not exist but has sub-documents. These documents will be returned with a key but will not have fields, Document.create_time, or Document.update_time set.   Requests with `show_missing` may not specify `where` or `order_by`.
      transaction?: string,  // (optional) Reads documents in a transaction.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListDocumentsResponse> {
    const path = `/${args.parent}/${args.collectionId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce<HttpParams>((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
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

  /**
   * Creates a new document.
   */
  firestoreProjectsDatabasesDocumentsCreateDocument(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.Document,
      collectionId: string,  // The collection ID, relative to `parent`, to list. For example: `chatrooms`.
      documentId?: string,  // (optional) The client-assigned document ID to use for this document.  Optional. If not specified, an ID will be assigned by the service.
      maskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
      parent: string,  // The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Document> {
    const path = `/${args.parent}/${args.collectionId}`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    if ('documentId' in args) {
      options.params = options.params.set('documentId', String(args.documentId));
    }
    if ('maskFieldPaths' in args) {
      if (args.maskFieldPaths && args.maskFieldPaths.length) {
        options.params = args.maskFieldPaths.reduce<HttpParams>((acc, cur) => acc.append('mask.fieldPaths', `${cur}`), options.params);
      }
    }
    return this.sendRequest<models.Document>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Lists all the collection IDs underneath a document.
   */
  firestoreProjectsDatabasesDocumentsListCollectionIds(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.ListCollectionIdsRequest,
      parent: string,  // The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListCollectionIdsResponse> {
    const path = `/${args.parent}:listCollectionIds`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
    return this.sendRequest<models.ListCollectionIdsResponse>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Runs a query.
   */
  firestoreProjectsDatabasesDocumentsRunQuery(
    args: {
      $Xgafv?: models.$Xgafv,  // (optional) - error format - 1 V1 - 2 V2 
      accessToken?: string,  // (optional) OAuth access token.
      alt?: models.Alt,  // (optional) Data format for response.
      bearerToken?: string,  // (optional) OAuth bearer token.
      callback?: string,  // (optional) JSONP
      fields?: string,  // (optional) Selector specifying which fields to include in a partial response.
      key?: string,  // (optional) API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
      oauthToken?: string,  // (optional) OAuth 2.0 token for the current user.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) Returns response with indentations and line breaks.
      quotaUser?: string,  // (optional) Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
      uploadType?: string,  // (optional) Legacy upload protocol for media (e.g. "media", "multipart").
      uploadProtocol?: string,  // (optional) Upload protocol for media (e.g. "raw", "multipart").
      body?: models.RunQueryRequest,
      parent: string,  // The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RunQueryResponse> {
    const path = `/${args.parent}:runQuery`;
    const options: APIHttpOptions = {...this.options, ...requestHttpOptions};

    if ('$Xgafv' in args) {
      options.params = options.params.set('$.xgafv', String(args.$Xgafv));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('bearerToken' in args) {
      options.params = options.params.set('bearer_token', String(args.bearerToken));
    }
    if ('callback' in args) {
      options.params = options.params.set('callback', String(args.callback));
    }
    if ('fields' in args) {
      options.params = options.params.set('fields', String(args.fields));
    }
    if ('key' in args) {
      options.params = options.params.set('key', String(args.key));
    }
    if ('oauthToken' in args) {
      options.params = options.params.set('oauth_token', String(args.oauthToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('quotaUser' in args) {
      options.params = options.params.set('quotaUser', String(args.quotaUser));
    }
    if ('uploadType' in args) {
      options.params = options.params.set('uploadType', String(args.uploadType));
    }
    if ('uploadProtocol' in args) {
      options.params = options.params.set('upload_protocol', String(args.uploadProtocol));
    }
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
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
