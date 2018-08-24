/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface GistsAPIClientInterface {

  /**
   * List the authenticated user's gists or if called anonymously, this will
   * return all public gists.
   * 
   */
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
  ): Observable<models.Gists>;

  /**
   * Create a gist.
   */
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
  ): Observable<models.Gist>;

  /**
   * List all public gists.
   */
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
  ): Observable<models.Gists>;

  /**
   * List the authenticated user's starred gists.
   */
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
  ): Observable<models.Gists>;

  /**
   * Delete a gist.
   */
  deleteGistsId(
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
  ): Observable<any>;

  /**
   * Get a single gist.
   */
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
  ): Observable<models.Gist>;

  /**
   * Edit a gist.
   */
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
  ): Observable<models.Gist>;

  /**
   * List comments on a gist.
   */
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
  ): Observable<models.Comments>;

  /**
   * Create a commen
   */
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
  ): Observable<models.Comment>;

  /**
   * Delete a comment.
   */
  deleteGistsIdCommentsCommentId(
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
  ): Observable<any>;

  /**
   * Get a single comment.
   */
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
  ): Observable<models.Comment>;

  /**
   * Edit a comment.
   */
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
  ): Observable<models.Comment>;

  /**
   * Fork a gist.
   */
  postGistsIdForks(
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
  ): Observable<any>;

  /**
   * Unstar a gist.
   */
  deleteGistsIdStar(
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
  ): Observable<any>;

  /**
   * Check if a gist is starred.
   */
  getGistsIdStar(
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
  ): Observable<any>;

  /**
   * Star a gist.
   */
  putGistsIdStar(
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
  ): Observable<any>;

}
