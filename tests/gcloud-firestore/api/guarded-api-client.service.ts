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
    return super.firestoreProjectsDatabasesDocumentsBatchGet(args, requestHttpOptions)
      .pipe(tap((res) => guards.isBatchGetDocumentsResponse(res) || console.error(`TypeGuard for response 'BatchGetDocumentsResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsBeginTransaction(args, requestHttpOptions)
      .pipe(tap((res) => guards.isBeginTransactionResponse(res) || console.error(`TypeGuard for response 'BeginTransactionResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsCommit(args, requestHttpOptions)
      .pipe(tap((res) => guards.isCommitResponse(res) || console.error(`TypeGuard for response 'CommitResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsListen(args, requestHttpOptions)
      .pipe(tap((res) => guards.isListenResponse(res) || console.error(`TypeGuard for response 'ListenResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsRollback(args, requestHttpOptions)
      .pipe(tap((res) => guards.isEmpty(res) || console.error(`TypeGuard for response 'Empty' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsWrite(args, requestHttpOptions)
      .pipe(tap((res) => guards.isWriteResponse(res) || console.error(`TypeGuard for response 'WriteResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesIndexesDelete(args, requestHttpOptions)
      .pipe(tap((res) => guards.isEmpty(res) || console.error(`TypeGuard for response 'Empty' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesIndexesGet(args, requestHttpOptions)
      .pipe(tap((res) => guards.isIndex(res) || console.error(`TypeGuard for response 'Index' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsPatch(args, requestHttpOptions)
      .pipe(tap((res) => guards.isDocument(res) || console.error(`TypeGuard for response 'Document' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesIndexesList(args, requestHttpOptions)
      .pipe(tap((res) => guards.isListIndexesResponse(res) || console.error(`TypeGuard for response 'ListIndexesResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesIndexesCreate(args, requestHttpOptions)
      .pipe(tap((res) => guards.isOperation(res) || console.error(`TypeGuard for response 'Operation' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsList(args, requestHttpOptions)
      .pipe(tap((res) => guards.isListDocumentsResponse(res) || console.error(`TypeGuard for response 'ListDocumentsResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsCreateDocument(args, requestHttpOptions)
      .pipe(tap((res) => guards.isDocument(res) || console.error(`TypeGuard for response 'Document' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsListCollectionIds(args, requestHttpOptions)
      .pipe(tap((res) => guards.isListCollectionIdsResponse(res) || console.error(`TypeGuard for response 'ListCollectionIdsResponse' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsRunQuery(args, requestHttpOptions)
      .pipe(tap((res) => guards.isRunQueryResponse(res) || console.error(`TypeGuard for response 'RunQueryResponse' caught inconsistency.`, res)));
  }

}
