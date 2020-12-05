/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from '../../types';
import * as models from '../../models';

export interface ProjectAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getProjectTypes(
    requestHttpOptions?: HttpOptions
  ): Observable<models.ProjectTypeViewModel[]>;

}
