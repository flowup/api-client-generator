/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface DashboardAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getWidgetTypes(
    requestHttpOptions?: HttpOptions
  ): Observable<models.WidgetTypeViewModel[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  get(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DashboardViewModel>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getSettings(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RowModel[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  putSettings(
    args: {
      dashboardId: number,
      rows: models.RowModel[],
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

}
