/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface DummySelectorAPIClientInterface {

  get(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorViewModel>;

  getSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorSettings>;

  putSettings(
    args: {
      organizerTaskElementId: number,
      betriebSelectorSettings: models.DummySelectorSettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  deleteSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

}
