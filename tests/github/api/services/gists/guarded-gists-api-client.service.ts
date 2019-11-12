/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, GistsAPIClient } from './gists-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedGistsAPIClient extends GistsAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getGists(
    args: {
      since?: string,  // (optional) Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gists> {
    return super.getGists(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGists(res) || console.error(`TypeGuard for response 'Gists' caught inconsistency.`, res)));
  }

  postGists(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PostGist,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gist> {
    return super.postGists(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGist(res) || console.error(`TypeGuard for response 'Gist' caught inconsistency.`, res)));
  }

  getGistsPublic(
    args: {
      since?: string,  // (optional) Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gists> {
    return super.getGistsPublic(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGists(res) || console.error(`TypeGuard for response 'Gists' caught inconsistency.`, res)));
  }

  getGistsStarred(
    args: {
      since?: string,  // (optional) Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gists> {
    return super.getGistsStarred(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGists(res) || console.error(`TypeGuard for response 'Gists' caught inconsistency.`, res)));
  }

  getGistsId(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gist> {
    return super.getGistsId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGist(res) || console.error(`TypeGuard for response 'Gist' caught inconsistency.`, res)));
  }

  patchGistsId(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PatchGist,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gist> {
    return super.patchGistsId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isGist(res) || console.error(`TypeGuard for response 'Gist' caught inconsistency.`, res)));
  }

  getGistsIdComments(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comments> {
    return super.getGistsIdComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isComments(res) || console.error(`TypeGuard for response 'Comments' caught inconsistency.`, res)));
  }

  postGistsIdComments(
    args: {
      id: number,  // Id of gist.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comment> {
    return super.postGistsIdComments(args, requestHttpOptions)
      .pipe(tap((res) => guards.isComment(res) || console.error(`TypeGuard for response 'Comment' caught inconsistency.`, res)));
  }

  getGistsIdCommentsCommentId(
    args: {
      id: number,  // Id of gist.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comment> {
    return super.getGistsIdCommentsCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isComment(res) || console.error(`TypeGuard for response 'Comment' caught inconsistency.`, res)));
  }

  patchGistsIdCommentsCommentId(
    args: {
      id: number,  // Id of gist.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Comment,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Comment> {
    return super.patchGistsIdCommentsCommentId(args, requestHttpOptions)
      .pipe(tap((res) => guards.isComment(res) || console.error(`TypeGuard for response 'Comment' caught inconsistency.`, res)));
  }

}
