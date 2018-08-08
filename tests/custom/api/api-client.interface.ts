/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  getItems(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ItemList>;

  getItemModels(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any[]>;

  deletePetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  patchPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getCustomers(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Customer[] | null>;

}
