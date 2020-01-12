/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, UserAPIClientInterface } from './';

import * as models from '../../models';

export const USE_DOMAIN = new InjectionToken<string>('UserAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('UserAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class UserAPIClient implements UserAPIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `https://api.github.com`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {

    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  /**
   * Get the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUser(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/user`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.User>('GET', path, options);
  }

  /**
   * Update the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchUser(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/user`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.User>('PATCH', path, options, JSON.stringify(args.body));
  }

  /**
   * Delete email address(es).
   * You can include a single email address or an array of addresses.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserEmails(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserEmails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/emails`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('DELETE', path, options, JSON.stringify(args.body));
  }

  /**
   * List email addresses for a user.
   * In the final version of the API, this method will return an array of hashes
   * with extended information for each email address indicating if the address
   * has been verified and if it's primary email address for GitHub.
   * Until API v3 is finalized, use the application/vnd.github.v3 media type to
   * get other response format.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserEmails(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserEmails> {
    const path = `/user/emails`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.UserEmails>('GET', path, options);
  }

  /**
   * Add email address(es).
   * You can post a single email address or an array of addresses.
   * 
   * Response generated for [ missing ] HTTP response code.
   */
  postUserEmails(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/emails`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * List the authenticated user's followers
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserFollowers(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/user/followers`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Users>('GET', path, options);
  }

  /**
   * List who the authenticated user is following.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserFollowing(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/user/following`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Users>('GET', path, options);
  }

  /**
   * Unfollow a user.
   * Unfollowing a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserFollowingUsername(
    args: {
      username: string,  // Name of user.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/following/${args.username}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Check if you are following a user.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserFollowingUsername(
    args: {
      username: string,  // Name of user.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/following/${args.username}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('GET', path, options);
  }

  /**
   * Follow a user.
   * Following a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserFollowingUsername(
    args: {
      username: string,  // Name of user.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/following/${args.username}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('PUT', path, options);
  }

  /**
   * List issues.
   * List all issues across owned and member repositories for the authenticated
   * user.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserIssues(
    args: {
      filter: 'assigned' | 'created' | 'mentioned' | 'subscribed' | 'all',  // Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see 
      state: 'open' | 'closed',
      labels: string,  // String list of comma separated Label names. Example - bug,ui,@high.
      sort: 'created' | 'updated' | 'comments',
      direction: 'asc' | 'desc',
      since?: string,  // (optional) Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issues> {
    const path = `/user/issues`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('filter' in args) {
      options.params = options.params.set('filter', String(args.filter));
    }
    if ('state' in args) {
      options.params = options.params.set('state', String(args.state));
    }
    if ('labels' in args) {
      options.params = options.params.set('labels', String(args.labels));
    }
    if ('sort' in args) {
      options.params = options.params.set('sort', String(args.sort));
    }
    if ('direction' in args) {
      options.params = options.params.set('direction', String(args.direction));
    }
    if ('since' in args) {
      options.params = options.params.set('since', String(args.since));
    }
    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Issues>('GET', path, options);
  }

  /**
   * List your public keys.
   * Lists the current user's keys. Management of public keys via the API requires
   * that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserKeys(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/user/keys`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Gitignore>('GET', path, options);
  }

  /**
   * Create a public key.
   * Response generated for [ 201 ] HTTP response code.
   */
  postUserKeys(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserKeysPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId> {
    const path = `/user/keys`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.UserKeysKeyId>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserKeysKeyId(
    args: {
      keyId: number,  // ID of key.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/keys/${args.keyId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Get a single public key.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserKeysKeyId(
    args: {
      keyId: number,  // ID of key.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId> {
    const path = `/user/keys/${args.keyId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.UserKeysKeyId>('GET', path, options);
  }

  /**
   * List public and private organizations for the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserOrgs(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/user/orgs`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Gitignore>('GET', path, options);
  }

  /**
   * List repositories for the authenticated user. Note that this does not include
   * repositories owned by organizations which the user can access. You can lis
   * user organizations and list organization repositories separately.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserRepos(
    args: {
      type?: 'all' | 'public' | 'private' | 'forks' | 'sources' | 'member',
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repos> {
    const path = `/user/repos`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('type' in args) {
      options.params = options.params.set('type', String(args.type));
    }
    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Repos>('GET', path, options);
  }

  /**
   * Create a new repository for the authenticated user. OAuth users must supply
   * repo scope.
   * 
   * Response generated for [ 201 ] HTTP response code.
   */
  postUserRepos(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PostRepo,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repos> {
    const path = `/user/repos`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Repos>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * List repositories being starred by the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserStarred(
    args: {
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: 'created' | 'updated',
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/user/starred`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('direction' in args) {
      options.params = options.params.set('direction', String(args.direction));
    }
    if ('sort' in args) {
      options.params = options.params.set('sort', String(args.sort));
    }
    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.Gitignore>('GET', path, options);
  }

  /**
   * Unstar a repository
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserStarredOwnerRepo(
    args: {
      owner: string,  // Name of a repository owner.
      repo: string,  // Name of a repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/starred/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Check if you are starring a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserStarredOwnerRepo(
    args: {
      owner: string,  // Name of a repository owner.
      repo: string,  // Name of a repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/starred/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('GET', path, options);
  }

  /**
   * Star a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserStarredOwnerRepo(
    args: {
      owner: string,  // Name of a repository owner.
      repo: string,  // Name of a repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/starred/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('PUT', path, options);
  }

  /**
   * List repositories being watched by the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserSubscriptions(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserUserIdSubscribitions> {
    const path = `/user/subscriptions`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.UserUserIdSubscribitions>('GET', path, options);
  }

  /**
   * Stop watching a repository
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserSubscriptionsOwnerRepo(
    args: {
      owner: string,  // Name of the owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/subscriptions/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Check if you are watching a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserSubscriptionsOwnerRepo(
    args: {
      owner: string,  // Name of the owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/subscriptions/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('GET', path, options);
  }

  /**
   * Watch a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserSubscriptionsOwnerRepo(
    args: {
      owner: string,  // Name of the owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/user/subscriptions/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<void>('PUT', path, options);
  }

  /**
   * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserTeams(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TeamsList> {
    const path = `/user/teams`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimitLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimitLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.sendRequest<models.TeamsList>('GET', path, options);
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
