/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, SearchAPIClient } from './search-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedSearchAPIClient extends SearchAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getSearchCode(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The search terms. This can be any combination of the supported code search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the file contents, the file path, or both. 'Languages' Searches code based on the language it's written in. 'Forks' Filters repositories based on the number of forks, and/or whether code from forked repositories should be included in the results at all. 'Size' Finds files that match a certain size (in bytes). 'Path' Specifies the path that the resulting file must be at. 'Extension' Matches files with a certain extension. 'Users' or 'Repositories' Limits searches to a specific user or repository. 
      sort?: string,  // (optional) Can only be 'indexed', which indicates how recently a file has been indexed by the GitHub search infrastructure. If not provided, results are sorted by best match. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchCode> {
    return super.getSearchCode(args, requestHttpOptions)
      .pipe(tap((res) => guards.issearch-code(res) || console.error(`TypeGuard for response 'search-code' caught inconsistency.`, res)));
  }

  getSearchIssues(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The q search term can also contain any combination of the supported issue search qualifiers:
      sort?: string,  // (optional) The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchIssues> {
    return super.getSearchIssues(args, requestHttpOptions)
      .pipe(tap((res) => guards.issearch-issues(res) || console.error(`TypeGuard for response 'search-issues' caught inconsistency.`, res)));
  }

  getSearchRepositories(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The search terms. This can be any combination of the supported repository search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these. 'Size' Finds repositories that match a certain size (in kilobytes). 'Forks' Filters repositories based on the number of forks, and/or whether forked repositories should be included in the results at all. 'Created' and 'Last Updated' Filters repositories based on times of creation, or when they were last updated. 'Users or Repositories' Limits searches to a specific user or repository. 'Languages' Searches repositories based on the language they are written in. 'Stars' Searches repositories based on the number of stars. 
      sort?: string,  // (optional) If not provided, results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchRepositories> {
    return super.getSearchRepositories(args, requestHttpOptions)
      .pipe(tap((res) => guards.issearch-repositories(res) || console.error(`TypeGuard for response 'search-repositories' caught inconsistency.`, res)));
  }

  getSearchUsers(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The search terms. This can be any combination of the supported user search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the username, public email, full name, location, or any combination of these. 'Repository count' Filters users based on the number of repositories they have. 'Location' Filter users by the location indicated in their profile. 'Language' Search for users that have repositories that match a certain language. 'Created' Filter users based on when they joined. 'Followers' Filter users based on the number of followers they have. 
      sort?: string,  // (optional) If not provided, results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchUsers> {
    return super.getSearchUsers(args, requestHttpOptions)
      .pipe(tap((res) => guards.issearch-users(res) || console.error(`TypeGuard for response 'search-users' caught inconsistency.`, res)));
  }

}
