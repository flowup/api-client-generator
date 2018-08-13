/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface ProjectAPIClientInterface {

  getProjectTypes(
    requestHttpOptions?: HttpOptions
  ): Observable<models.ProjectTypeViewModel[]>;

}
