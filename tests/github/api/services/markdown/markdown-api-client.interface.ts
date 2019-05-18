/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface MarkdownAPIClientInterface {

  /**
   * Render an arbitrary Markdown document
   * Response generated for [ 200 ] HTTP response code.
   */
  postMarkdown(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Markdown,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Render a Markdown document in raw mode
   * Response generated for [ 200 ] HTTP response code.
   */
  postMarkdownRaw(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

}
