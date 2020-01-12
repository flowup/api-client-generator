/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface LegacyAPIClientInterface {

  /**
   * Find issues by state and keyword.
   * Response generated for [ 200 ] HTTP response code.
   */
  getLegacyIssuesSearchOwnerRepositoryStateKeyword(
    args: {
      keyword: string,  // The search term.
      state: 'open' | 'closed',  // Indicates the state of the issues to return. Can be either open or closed.
      owner: string,
      repository: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchIssuesByKeyword>;

  /**
   * Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.
   * Response generated for [ 200 ] HTTP response code.
   */
  getLegacyReposSearchKeyword(
    args: {
      keyword: string,  // The search term
      order?: 'desc' | 'asc',  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      language?: string,  // (optional) Filter results by language
      startPage?: string,  // (optional) The page number to fetch
      sort?: 'updated' | 'stars' | 'forks',  // (optional) The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchRepositoriesByKeyword>;

  /**
   * This API call is added for compatibility reasons only.
   * Response generated for [ 200 ] HTTP response code.
   */
  getLegacyUserEmail(
    args: {
      email: string,  // The email address
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchUserByEmail>;

  /**
   * Find users by keyword.
   * Response generated for [ 200 ] HTTP response code.
   */
  getLegacyUserSearchKeyword(
    args: {
      keyword: string,  // The search term
      order?: 'desc' | 'asc',  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      startPage?: string,  // (optional) The page number to fetch
      sort?: 'updated' | 'stars' | 'forks',  // (optional) The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchUsersByKeyword>;

}
