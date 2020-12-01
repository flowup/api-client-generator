/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getItems(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ItemList>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getItemModels(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deletePetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getCustomers(
    requestHttpOptions?: HttpOptions
  ): Observable<(models.Customer[]) | null>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Dictionary>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getFileId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomObject(
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomModel(
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomString(
    requestHttpOptions?: HttpOptions
  ): Observable<string>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getDictionary(
    requestHttpOptions?: HttpOptions
  ): Observable<{ [key: string]: number }>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getArrayOfDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<{ [key: string]: number }[]>;

  /**
   * Commits a transaction, while optionally updating documents.
   * Response generated for [ 200 ] HTTP response code.
   */
  firestoreProjectsDatabasesDocumentsCommit(
    args: {
      wololo?: models.NumberEnumParam,  // (optional) - error format - 1 V1 - 2 V2 
      alt?: models.StringEnumParam,  // (optional) Data format for response.
      accessToken?: string,  // (optional) OAuth access token.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) should pretty print
      simpleQueryParam?: string,
      simpleArrayQueryParam?: number[],
      body?: models.Data,
      database: string,  // The database name. In the format `database:{{name}}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Dictionary>;

  /**
   * Create a custom Blob.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoGitBlobs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      accept?: string,  // (optional) Is used to set specified media type.
      body: models.Blob,  // Custom blob (should be imported from models)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Blob[]>;

  /**
   * Get standard File
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitBlobsShaCode(
    args: {
      body?: models.ModelParam,
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      accept?: string,  // (optional) Is used to set specified media type.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File>;

}
