/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, TeamsAPIClient } from './teams-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedTeamsAPIClient extends TeamsAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getTeamsTeamId(
    args: {
      teamId: number,  // Id of team.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Team> {
    return super.getTeamsTeamId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isTeam(res) || console.error(`TypeGuard for response 'models.Team' caught inconsistency.`, res)));
  }

  patchTeamsTeamId(
    args: {
      teamId: number,  // Id of team.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EditTeam,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Team> {
    return super.patchTeamsTeamId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isTeam(res) || console.error(`TypeGuard for response 'models.Team' caught inconsistency.`, res)));
  }

  getTeamsTeamIdMembers(
    args: {
      teamId: number,  // Id of team.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users> {
    return super.getTeamsTeamIdMembers(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isUsers(res) || console.error(`TypeGuard for response 'models.Users' caught inconsistency.`, res)));
  }

  getTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TeamMembership> {
    return super.getTeamsTeamIdMembershipsUsername(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isTeamMembership(res) || console.error(`TypeGuard for response 'models.TeamMembership' caught inconsistency.`, res)));
  }

  putTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TeamMembership> {
    return super.putTeamsTeamIdMembershipsUsername(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isTeamMembership(res) || console.error(`TypeGuard for response 'models.TeamMembership' caught inconsistency.`, res)));
  }

  getTeamsTeamIdRepos(
    args: {
      teamId: number,  // Id of team.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TeamRepos> {
    return super.getTeamsTeamIdRepos(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isTeamRepos(res) || console.error(`TypeGuard for response 'models.TeamRepos' caught inconsistency.`, res)));
  }

}
