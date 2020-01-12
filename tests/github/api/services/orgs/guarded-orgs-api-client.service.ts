/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, OrgsAPIClient } from './orgs-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedOrgsAPIClient extends OrgsAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getOrgsOrg(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Organization> {
    return super.getOrgsOrg(args, requestHttpOptions)
      .pipe(tap((res) => guards.isOrganization(res) || console.error(`TypeGuard for response 'Organization' caught inconsistency.`, res)));
  }

  patchOrgsOrg(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PatchOrg,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Organization> {
    return super.patchOrgsOrg(args, requestHttpOptions)
      .pipe(tap((res) => guards.isOrganization(res) || console.error(`TypeGuard for response 'Organization' caught inconsistency.`, res)));
  }

  getOrgsOrgEvents(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events> {
    return super.getOrgsOrgEvents(args, requestHttpOptions)
      .pipe(tap((res) => guards.isEvents(res) || console.error(`TypeGuard for response 'Events' caught inconsistency.`, res)));
  }

  getOrgsOrgIssues(
    args: {
      org: string,  // Name of organisation.
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
    return super.getOrgsOrgIssues(args, requestHttpOptions)
      .pipe(tap((res) => guards.isIssues(res) || console.error(`TypeGuard for response 'Issues' caught inconsistency.`, res)));
  }

  getOrgsOrgMembers(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    return super.getOrgsOrgMembers(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUsers(res) || console.error(`TypeGuard for response 'Users' caught inconsistency.`, res)));
  }

  getOrgsOrgPublicMembers(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    return super.getOrgsOrgPublicMembers(args, requestHttpOptions)
      .pipe(tap((res) => guards.isUsers(res) || console.error(`TypeGuard for response 'Users' caught inconsistency.`, res)));
  }

  getOrgsOrgRepos(
    args: {
      org: string,  // Name of organisation.
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
    return super.getOrgsOrgRepos(args, requestHttpOptions)
      .pipe(tap((res) => guards.isRepos(res) || console.error(`TypeGuard for response 'Repos' caught inconsistency.`, res)));
  }

  postOrgsOrgRepos(
    args: {
      org: string,  // Name of organisation.
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
    return super.postOrgsOrgRepos(args, requestHttpOptions)
      .pipe(tap((res) => guards.isRepos(res) || console.error(`TypeGuard for response 'Repos' caught inconsistency.`, res)));
  }

  getOrgsOrgTeams(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Teams> {
    return super.getOrgsOrgTeams(args, requestHttpOptions)
      .pipe(tap((res) => guards.isTeams(res) || console.error(`TypeGuard for response 'Teams' caught inconsistency.`, res)));
  }

  postOrgsOrgTeams(
    args: {
      org: string,  // Name of organisation.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.OrgTeamsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Team> {
    return super.postOrgsOrgTeams(args, requestHttpOptions)
      .pipe(tap((res) => guards.isTeam(res) || console.error(`TypeGuard for response 'Team' caught inconsistency.`, res)));
  }

}
