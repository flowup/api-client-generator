/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  /**
   * Gets multiple documents.
   * 
   * 
   * Documents returned by this method are not guaranteed to be returned in the
   * same order that they were requested.
   */
  firestoreProjectsDatabasesDocumentsBatchGet(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.BatchGetDocumentsRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.BatchGetDocumentsResponse>;

  /**
   * Starts a new transaction.
   */
  firestoreProjectsDatabasesDocumentsBeginTransaction(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.BeginTransactionRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.BeginTransactionResponse>;

  /**
   * Commits a transaction, while optionally updating documents.
   */
  firestoreProjectsDatabasesDocumentsCommit(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.CommitRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitResponse>;

  /**
   * Listens to changes.
   */
  firestoreProjectsDatabasesDocumentsListen(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.ListenRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListenResponse>;

  /**
   * Rolls back a transaction.
   */
  firestoreProjectsDatabasesDocumentsRollback(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.RollbackRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Empty>;

  /**
   * Streams batches of document updates and deletes, in order.
   */
  firestoreProjectsDatabasesDocumentsWrite(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.WriteRequest,
      database: string,  // The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.WriteResponse>;

  /**
   * Deletes an index.
   */
  firestoreProjectsDatabasesIndexesDelete(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      currentDocumentExists?: boolean,  // (optional) When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
      currentDocumentUpdateTime?: string,  // (optional) When set, the target document must exist and have been last updated at that time.
      name: string,  // The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Empty>;

  /**
   * Gets an index.
   */
  firestoreProjectsDatabasesIndexesGet(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      maskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
      name: string,  // The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
      readTime?: string,  // (optional) Reads the version of the document at the given time. This may not be older than 60 seconds.
      transaction?: string,  // (optional) Reads the document in a transaction.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Index>;

  /**
   * Updates or inserts a document.
   */
  firestoreProjectsDatabasesDocumentsPatch(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.Document,
      currentDocumentExists?: boolean,  // (optional) When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
      currentDocumentUpdateTime?: string,  // (optional) When set, the target document must exist and have been last updated at that time.
      maskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
      name: string,  // The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
      updateMaskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Document>;

  /**
   * Lists the indexes that match the specified filters.
   */
  firestoreProjectsDatabasesIndexesList(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      filter?: string,
      pageSize?: number,  // (optional) The standard List page size.
      pageToken?: string,  // (optional) The standard List page token.
      parent: string,  // The database name. For example: `projects/{project_id}/databases/{database_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListIndexesResponse>;

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
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.Index,
      parent: string,  // The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Operation>;

  /**
   * Lists documents.
   */
  firestoreProjectsDatabasesDocumentsList(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
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
  ): Observable<models.ListDocumentsResponse>;

  /**
   * Creates a new document.
   */
  firestoreProjectsDatabasesDocumentsCreateDocument(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.Document,
      collectionId: string,  // The collection ID, relative to `parent`, to list. For example: `chatrooms`.
      documentId?: string,  // (optional) The client-assigned document ID to use for this document.  Optional. If not specified, an ID will be assigned by the service.
      maskFieldPaths?: string[],  // (optional) The list of field paths in the mask. See Document.fields for a field path syntax reference.
      parent: string,  // The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Document>;

  /**
   * Lists all the collection IDs underneath a document.
   */
  firestoreProjectsDatabasesDocumentsListCollectionIds(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.ListCollectionIdsRequest,
      parent: string,  // The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListCollectionIdsResponse>;

  /**
   * Runs a query.
   */
  firestoreProjectsDatabasesDocumentsRunQuery(
    args: {
      $Xgafv?: models.$Xgafv,
      accessToken?: string,
      alt?: models.Alt,
      bearerToken?: string,
      callback?: string,
      fields?: string,
      key?: string,
      oauthToken?: string,
      pp?: boolean,
      prettyPrint?: boolean,
      quotaUser?: string,
      uploadType?: string,
      uploadProtocol?: string,
      body?: models.RunQueryRequest,
      parent: string,  // The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RunQueryResponse>;

}
