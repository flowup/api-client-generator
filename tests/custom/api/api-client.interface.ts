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
  ): Observable<Object>;

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
  ): Observable<models.Customer[] | null>;

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
  ): Observable<Object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomModel(
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomString(
    requestHttpOptions?: HttpOptions
  ): Observable<string>;

}
