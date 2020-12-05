/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from '../../types';
import * as models from '../../models';

export interface NetworksAPIClientInterface {

  /**
   * List public events for a network of repositories.
   * Response generated for [ 200 ] HTTP response code.
   */
  getNetworksOwnerRepoEvents(
    args: {
      owner: string,  // Name of the owner.
      repo: string,  // Name of repository.
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
