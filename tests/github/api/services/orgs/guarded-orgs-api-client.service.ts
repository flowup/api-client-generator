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
      .pipe(tap((res) => guards.isorganization(res) || console.error(`TypeGuard for response 'organization' caught inconsistency.`, res)));
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
      .pipe(tap((res) => guards.isorganization(res) || console.error(`TypeGuard for response 'organization' caught inconsistency.`, res)));
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
      .pipe(tap((res) => guards.isevents(res) || console.error(`TypeGuard for response 'events' caught inconsistency.`, res)));
  }

  getOrgsOrgIssues(
    args: {
      org: string,  // Name of organisation.
      filter: string,  // Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see 
      state: string,
      labels: string,  // String list of comma separated Label names. Example - bug,ui,@high.
      sort: string,
      direction: string,
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
      .pipe(tap((res) => guards.isissues(res) || console.error(`TypeGuard for response 'issues' caught inconsistency.`, res)));
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
      .pipe(tap((res) => guards.isusers(res) || console.error(`TypeGuard for response 'users' caught inconsistency.`, res)));
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
      .pipe(tap((res) => guards.isusers(res) || console.error(`TypeGuard for response 'users' caught inconsistency.`, res)));
  }

  getOrgsOrgRepos(
    args: {
      org: string,  // Name of organisation.
      type?: string,
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
      .pipe(tap((res) => guards.isrepos(res) || console.error(`TypeGuard for response 'repos' caught inconsistency.`, res)));
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
      .pipe(tap((res) => guards.isrepos(res) || console.error(`TypeGuard for response 'repos' caught inconsistency.`, res)));
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
      .pipe(tap((res) => guards.isteams(res) || console.error(`TypeGuard for response 'teams' caught inconsistency.`, res)));
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
      .pipe(tap((res) => guards.isteam(res) || console.error(`TypeGuard for response 'team' caught inconsistency.`, res)));
  }

}
