/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from '../../types';
import * as models from '../../models';

export interface EventsAPIClientInterface {

  /**
   * List public events.
   * Response generated for [ 200 ] HTTP response code.
   */
  getEvents(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

}
