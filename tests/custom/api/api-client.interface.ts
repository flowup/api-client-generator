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
  ): Observable<Object>;

  getPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]>;

  deletePetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  getCustomers(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Customer[] | null>;

}
