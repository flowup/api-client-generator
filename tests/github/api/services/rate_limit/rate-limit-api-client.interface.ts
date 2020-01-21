/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface RateLimitAPIClientInterface {

  /**
   * Get your current rate limit status
   * Note: Accessing this endpoint does not count against your rate limit.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getRateLimit(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RateLimit>;

}
