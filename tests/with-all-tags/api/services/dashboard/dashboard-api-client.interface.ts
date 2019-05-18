/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface DashboardAPIClientInterface {

  getWidgetTypes(
    requestHttpOptions?: HttpOptions
  ): Observable<models.WidgetTypeViewModel[]>;

  get(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DashboardViewModel>;

  getSettings(
    args: {
      dashboardId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RowModel[]>;

  putSettings(
    args: {
      dashboardId: number,
      rows: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Object>;

}
