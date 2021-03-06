/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { GistsAPIClientInterface } from './gists-api-client.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { USE_DOMAIN, USE_HTTP_OPTIONS, GistsAPIClient } from './gists-api-client.service';
import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
import * as guards from '../../guards';

@Injectable()
export class GuardedGistsAPIClient extends GistsAPIClient implements GistsAPIClientInterface {

  constructor(
    readonly httpClient: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    super(httpClient, domain, options);
  }

  /**
   * List the authenticated user's gists or if called anonymously, this will
   * return all public gists.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getGists(
    args?: GistsAPIClientInterface['getGistsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gists>;
  getGists(
    args?: GistsAPIClientInterface['getGistsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gists>>;
  getGists(
    args?: GistsAPIClientInterface['getGistsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gists>>;
  getGists(
    args: GistsAPIClientInterface['getGistsParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gists | HttpResponse<models.Gists> | HttpEvent<models.Gists>> {

    return super.getGists(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGists(res) || console.error(`TypeGuard for response 'models.Gists' caught inconsistency.`, res)));
  }

  /**
   * Create a gist.
   * Response generated for [ 201 ] HTTP response code.
   */
  postGists(
    args: Exclude<GistsAPIClientInterface['postGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gist>;
  postGists(
    args: Exclude<GistsAPIClientInterface['postGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gist>>;
  postGists(
    args: Exclude<GistsAPIClientInterface['postGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gist>>;
  postGists(
    args: Exclude<GistsAPIClientInterface['postGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gist | HttpResponse<models.Gist> | HttpEvent<models.Gist>> {

    return super.postGists(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGist(res) || console.error(`TypeGuard for response 'models.Gist' caught inconsistency.`, res)));
  }

  /**
   * List all public gists.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsPublic(
    args?: GistsAPIClientInterface['getGistsPublicParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gists>;
  getGistsPublic(
    args?: GistsAPIClientInterface['getGistsPublicParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gists>>;
  getGistsPublic(
    args?: GistsAPIClientInterface['getGistsPublicParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gists>>;
  getGistsPublic(
    args: GistsAPIClientInterface['getGistsPublicParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gists | HttpResponse<models.Gists> | HttpEvent<models.Gists>> {

    return super.getGistsPublic(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGists(res) || console.error(`TypeGuard for response 'models.Gists' caught inconsistency.`, res)));
  }

  /**
   * List the authenticated user's starred gists.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsStarred(
    args?: GistsAPIClientInterface['getGistsStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gists>;
  getGistsStarred(
    args?: GistsAPIClientInterface['getGistsStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gists>>;
  getGistsStarred(
    args?: GistsAPIClientInterface['getGistsStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gists>>;
  getGistsStarred(
    args: GistsAPIClientInterface['getGistsStarredParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gists | HttpResponse<models.Gists> | HttpEvent<models.Gists>> {

    return super.getGistsStarred(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGists(res) || console.error(`TypeGuard for response 'models.Gists' caught inconsistency.`, res)));
  }

  /**
   * Delete a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteGistsId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteGistsId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteGistsId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteGistsId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteGistsId(args, requestHttpOptions, observe);
  }

  /**
   * Get a single gist.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsId(
    args: Exclude<GistsAPIClientInterface['getGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gist>;
  getGistsId(
    args: Exclude<GistsAPIClientInterface['getGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gist>>;
  getGistsId(
    args: Exclude<GistsAPIClientInterface['getGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gist>>;
  getGistsId(
    args: Exclude<GistsAPIClientInterface['getGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gist | HttpResponse<models.Gist> | HttpEvent<models.Gist>> {

    return super.getGistsId(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGist(res) || console.error(`TypeGuard for response 'models.Gist' caught inconsistency.`, res)));
  }

  /**
   * Edit a gist.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchGistsId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gist>;
  patchGistsId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gist>>;
  patchGistsId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gist>>;
  patchGistsId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gist | HttpResponse<models.Gist> | HttpEvent<models.Gist>> {

    return super.patchGistsId(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGist(res) || console.error(`TypeGuard for response 'models.Gist' caught inconsistency.`, res)));
  }

  /**
   * List comments on a gist.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsIdComments(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Comments>;
  getGistsIdComments(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Comments>>;
  getGistsIdComments(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Comments>>;
  getGistsIdComments(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Comments | HttpResponse<models.Comments> | HttpEvent<models.Comments>> {

    return super.getGistsIdComments(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isComments(res) || console.error(`TypeGuard for response 'models.Comments' caught inconsistency.`, res)));
  }

  /**
   * Create a commen
   * Response generated for [ 201 ] HTTP response code.
   */
  postGistsIdComments(
    args: Exclude<GistsAPIClientInterface['postGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Comment>;
  postGistsIdComments(
    args: Exclude<GistsAPIClientInterface['postGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Comment>>;
  postGistsIdComments(
    args: Exclude<GistsAPIClientInterface['postGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Comment>>;
  postGistsIdComments(
    args: Exclude<GistsAPIClientInterface['postGistsIdCommentsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Comment | HttpResponse<models.Comment> | HttpEvent<models.Comment>> {

    return super.postGistsIdComments(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isComment(res) || console.error(`TypeGuard for response 'models.Comment' caught inconsistency.`, res)));
  }

  /**
   * Delete a comment.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteGistsIdCommentsCommentId(args, requestHttpOptions, observe);
  }

  /**
   * Get a single comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Comment>;
  getGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Comment>>;
  getGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Comment>>;
  getGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['getGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Comment | HttpResponse<models.Comment> | HttpEvent<models.Comment>> {

    return super.getGistsIdCommentsCommentId(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isComment(res) || console.error(`TypeGuard for response 'models.Comment' caught inconsistency.`, res)));
  }

  /**
   * Edit a comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Comment>;
  patchGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Comment>>;
  patchGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Comment>>;
  patchGistsIdCommentsCommentId(
    args: Exclude<GistsAPIClientInterface['patchGistsIdCommentsCommentIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Comment | HttpResponse<models.Comment> | HttpEvent<models.Comment>> {

    return super.patchGistsIdCommentsCommentId(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isComment(res) || console.error(`TypeGuard for response 'models.Comment' caught inconsistency.`, res)));
  }

  /**
   * Fork a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  postGistsIdForks(
    args: Exclude<GistsAPIClientInterface['postGistsIdForksParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  postGistsIdForks(
    args: Exclude<GistsAPIClientInterface['postGistsIdForksParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  postGistsIdForks(
    args: Exclude<GistsAPIClientInterface['postGistsIdForksParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  postGistsIdForks(
    args: Exclude<GistsAPIClientInterface['postGistsIdForksParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.postGistsIdForks(args, requestHttpOptions, observe);
  }

  /**
   * Unstar a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteGistsIdStar(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteGistsIdStar(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteGistsIdStar(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteGistsIdStar(
    args: Exclude<GistsAPIClientInterface['deleteGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteGistsIdStar(args, requestHttpOptions, observe);
  }

  /**
   * Check if a gist is starred.
   * Response generated for [ 204 ] HTTP response code.
   */
  getGistsIdStar(
    args: Exclude<GistsAPIClientInterface['getGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getGistsIdStar(
    args: Exclude<GistsAPIClientInterface['getGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getGistsIdStar(
    args: Exclude<GistsAPIClientInterface['getGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getGistsIdStar(
    args: Exclude<GistsAPIClientInterface['getGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getGistsIdStar(args, requestHttpOptions, observe);
  }

  /**
   * Star a gist.
   * Response generated for [ 204 ] HTTP response code.
   */
  putGistsIdStar(
    args: Exclude<GistsAPIClientInterface['putGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putGistsIdStar(
    args: Exclude<GistsAPIClientInterface['putGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putGistsIdStar(
    args: Exclude<GistsAPIClientInterface['putGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  putGistsIdStar(
    args: Exclude<GistsAPIClientInterface['putGistsIdStarParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.putGistsIdStar(args, requestHttpOptions, observe);
  }

}
