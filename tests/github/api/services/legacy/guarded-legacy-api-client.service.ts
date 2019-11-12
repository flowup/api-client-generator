/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, LegacyAPIClient } from './legacy-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedLegacyAPIClient extends LegacyAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getLegacyIssuesSearchOwnerRepositoryStateKeyword(
    args: {
      keyword: string,  // The search term.
      state: string,  // Indicates the state of the issues to return. Can be either open or closed.
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
  ): Observable<models.SearchIssuesByKeyword> {
    return super.getLegacyIssuesSearchOwnerRepositoryStateKeyword(args, requestHttpOptions)
      .pipe(tap((res) => guards.isSearchIssuesByKeyword(res) || console.error(`TypeGuard for response 'SearchIssuesByKeyword' caught inconsistency.`, res)));
  }

  getLegacyReposSearchKeyword(
    args: {
      keyword: string,  // The search term
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      language?: string,  // (optional) Filter results by language
      startPage?: string,  // (optional) The page number to fetch
      sort?: string,  // (optional) The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchRepositoriesByKeyword> {
    return super.getLegacyReposSearchKeyword(args, requestHttpOptions)
      .pipe(tap((res) => guards.isSearchRepositoriesByKeyword(res) || console.error(`TypeGuard for response 'SearchRepositoriesByKeyword' caught inconsistency.`, res)));
  }

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
  ): Observable<models.SearchUserByEmail> {
    return super.getLegacyUserEmail(args, requestHttpOptions)
      .pipe(tap((res) => guards.isSearchUserByEmail(res) || console.error(`TypeGuard for response 'SearchUserByEmail' caught inconsistency.`, res)));
  }

  getLegacyUserSearchKeyword(
    args: {
      keyword: string,  // The search term
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      startPage?: string,  // (optional) The page number to fetch
      sort?: string,  // (optional) The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchUsersByKeyword> {
    return super.getLegacyUserSearchKeyword(args, requestHttpOptions)
      .pipe(tap((res) => guards.isSearchUsersByKeyword(res) || console.error(`TypeGuard for response 'SearchUsersByKeyword' caught inconsistency.`, res)));
  }

}
