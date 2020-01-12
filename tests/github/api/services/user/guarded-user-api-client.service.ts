/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, UserAPIClient } from './user-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedUserAPIClient extends UserAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

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
    return super.getUser(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUser(res) || console.error(`TypeGuard for response 'User' caught inconsistency.`, res)));
  }

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
    return super.patchUser(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUser(res) || console.error(`TypeGuard for response 'User' caught inconsistency.`, res)));
  }

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
    return super.getUserEmails(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUserEmails(res) || console.error(`TypeGuard for response 'UserEmails' caught inconsistency.`, res)));
  }

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
    return super.getUserFollowers(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUsers(res) || console.error(`TypeGuard for response 'Users' caught inconsistency.`, res)));
  }

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
    return super.getUserFollowing(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUsers(res) || console.error(`TypeGuard for response 'Users' caught inconsistency.`, res)));
  }

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
    return super.getUserIssues(args, requestHttpOptions)
      .pipe(tap((res) => guards.isIssues(res) || console.error(`TypeGuard for response 'Issues' caught inconsistency.`, res)));
  }

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
    return super.getUserKeys(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGitignore(res) || console.error(`TypeGuard for response 'Gitignore' caught inconsistency.`, res)));
  }

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
    return super.postUserKeys(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUserKeysKeyId(res) || console.error(`TypeGuard for response 'UserKeysKeyId' caught inconsistency.`, res)));
  }

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
    return super.getUserKeysKeyId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUserKeysKeyId(res) || console.error(`TypeGuard for response 'UserKeysKeyId' caught inconsistency.`, res)));
  }

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
    return super.getUserOrgs(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGitignore(res) || console.error(`TypeGuard for response 'Gitignore' caught inconsistency.`, res)));
  }

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
    return super.getUserRepos(args, requestHttpOptions)
      .pipe(tap((res) => guards.isRepos(res) || console.error(`TypeGuard for response 'Repos' caught inconsistency.`, res)));
  }

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
    return super.postUserRepos(args, requestHttpOptions)
      .pipe(tap((res) => guards.isRepos(res) || console.error(`TypeGuard for response 'Repos' caught inconsistency.`, res)));
  }

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
    return super.getUserStarred(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGitignore(res) || console.error(`TypeGuard for response 'Gitignore' caught inconsistency.`, res)));
  }

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
    return super.getUserSubscriptions(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUserUserIdSubscribitions(res) || console.error(`TypeGuard for response 'UserUserIdSubscribitions' caught inconsistency.`, res)));
  }

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
    return super.getUserTeams(args, requestHttpOptions)
      .pipe(tap((res) => guards.isTeamsList(res) || console.error(`TypeGuard for response 'TeamsList' caught inconsistency.`, res)));
  }

}
