/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOptions } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders,
  params: HttpParams,
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient {

  readonly options: APIHttpOptions;

  private readonly domain: string = `https://api.github.com`;

  constructor(private http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options: HttpOptions) {

    if (domain) {
      this.domain = domain;
    }

    this.options = {
      headers: options && options.headers ? options.headers : new HttpHeaders(),
      params: options && options.params ? options.params : new HttpParams(),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  getEmojis(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Emojis> {
    const path = `/emojis`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Emojis>('GET', path, options);
  }

  getEvents(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Events> {
    const path = `/events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Events>('GET', path, options);
  }

  getFeeds(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Feeds> {
    const path = `/feeds`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Feeds>('GET', path, options);
  }

  getGists(
    args: {
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gists> {
    const path = `/gists`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Gists>('GET', path, options);
  }

  postGists(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PostGist,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getGistsPublic(
    args: {
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gists> {
    const path = `/gists/public`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Gists>('GET', path, options);
  }

  getGistsStarred(
    args: {
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gists> {
    const path = `/gists/starred`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Gists>('GET', path, options);
  }

  deleteGistsId(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getGistsId(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gist> {
    const path = `/gists/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Gist>('GET', path, options);
  }

  patchGistsId(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PatchGist,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gist> {
    const path = `/gists/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Gist>('PATCH', path, options, JSON.stringify(args.body));
  }

  getGistsIdComments(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Comments> {
    const path = `/gists/${args.id}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Comments>('GET', path, options);
  }

  postGistsIdComments(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists/${args.id}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteGistsIdCommentsCommentId(
    args: {
      id: number,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists/${args.id}/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getGistsIdCommentsCommentId(
    args: {
      id: number,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Comment> {
    const path = `/gists/${args.id}/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Comment>('GET', path, options);
  }

  patchGistsIdCommentsCommentId(
    args: {
      id: number,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Comment,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Comment> {
    const path = `/gists/${args.id}/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Comment>('PATCH', path, options, JSON.stringify(args.body));
  }

  postGistsIdForks(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists/${args.id}/forks`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options);
  }

  deleteGistsIdStar(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists/${args.id}/star`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getGistsIdStar(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists/${args.id}/star`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putGistsIdStar(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/gists/${args.id}/star`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  getGitignoreTemplates(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/gitignore/templates`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getGitignoreTemplatesLanguage(
    args: {
      language: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.GitignoreLang> {
    const path = `/gitignore/templates/${args.language}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.GitignoreLang>('GET', path, options);
  }

  getIssues(
    args: {
      filter: string,
      state: string,
      labels: string,
      sort: string,
      direction: string,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Issues> {
    const path = `/issues`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getLegacyIssuesSearchOwnerRepositoryStateKeyword(
    args: {
      keyword: string,
      state: string,
      owner: string,
      repository: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchIssuesByKeyword> {
    const path = `/legacy/issues/search/${args.owner}/${args.repository}/${args.state}/${args.keyword}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.SearchIssuesByKeyword>('GET', path, options);
  }

  getLegacyReposSearchKeyword(
    args: {
      keyword: string,
      order?: string,
      language?: string,
      startPage?: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchRepositoriesByKeyword> {
    const path = `/legacy/repos/search/${args.keyword}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    if ('language' in args) {
      options.params = options.params.set('language', String(args.language));
    }
    if ('startPage' in args) {
      options.params = options.params.set('start_page', String(args.startPage));
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
    return this.sendRequest<models.SearchRepositoriesByKeyword>('GET', path, options);
  }

  getLegacyUserEmailEmail(
    args: {
      email: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchUserByEmail> {
    const path = `/legacy/user/email/${args.email}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.SearchUserByEmail>('GET', path, options);
  }

  getLegacyUserSearchKeyword(
    args: {
      keyword: string,
      order?: string,
      startPage?: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchUsersByKeyword> {
    const path = `/legacy/user/search/${args.keyword}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    if ('startPage' in args) {
      options.params = options.params.set('start_page', String(args.startPage));
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
    return this.sendRequest<models.SearchUsersByKeyword>('GET', path, options);
  }

  postMarkdown(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Markdown,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/markdown`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  postMarkdownRaw(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/markdown/raw`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options);
  }

  getMeta(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Meta> {
    const path = `/meta`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Meta>('GET', path, options);
  }

  getNetworksOwnerRepoEvents(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Events> {
    const path = `/networks/${args.owner}/${args.repo}/events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Events>('GET', path, options);
  }

  getNotifications(
    args: {
      all?: boolean,
      participating?: boolean,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Notifications> {
    const path = `/notifications`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('all' in args) {
      options.params = options.params.set('all', String(args.all));
    }
    if ('participating' in args) {
      options.params = options.params.set('participating', String(args.participating));
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
    return this.sendRequest<models.Notifications>('GET', path, options);
  }

  putNotifications(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.NotificationMarkRead,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.body));
  }

  getNotificationsThreadsId(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Notifications> {
    const path = `/notifications/threads/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Notifications>('GET', path, options);
  }

  patchNotificationsThreadsId(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/threads/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PATCH', path, options);
  }

  deleteNotificationsThreadsIdSubscription(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/notifications/threads/${args.id}/subscription`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getNotificationsThreadsIdSubscription(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Subscription> {
    const path = `/notifications/threads/${args.id}/subscription`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Subscription>('GET', path, options);
  }

  putNotificationsThreadsIdSubscription(
    args: {
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PutSubscription,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Subscription> {
    const path = `/notifications/threads/${args.id}/subscription`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Subscription>('PUT', path, options, JSON.stringify(args.body));
  }

  getOrgsOrg(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Organization> {
    const path = `/orgs/${args.org}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Organization>('GET', path, options);
  }

  patchOrgsOrg(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PatchOrg,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Organization> {
    const path = `/orgs/${args.org}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Organization>('PATCH', path, options, JSON.stringify(args.body));
  }

  getOrgsOrgEvents(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Events> {
    const path = `/orgs/${args.org}/events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Events>('GET', path, options);
  }

  getOrgsOrgIssues(
    args: {
      org: string,
      filter: string,
      state: string,
      labels: string,
      sort: string,
      direction: string,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Issues> {
    const path = `/orgs/${args.org}/issues`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getOrgsOrgMembers(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/orgs/${args.org}/members`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteOrgsOrgMembersUsername(
    args: {
      org: string,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/orgs/${args.org}/members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getOrgsOrgMembersUsername(
    args: {
      org: string,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/orgs/${args.org}/members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getOrgsOrgPublicMembers(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/orgs/${args.org}/public_members`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteOrgsOrgPublicMembersUsername(
    args: {
      org: string,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/orgs/${args.org}/public_members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getOrgsOrgPublicMembersUsername(
    args: {
      org: string,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/orgs/${args.org}/public_members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putOrgsOrgPublicMembersUsername(
    args: {
      org: string,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/orgs/${args.org}/public_members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  getOrgsOrgRepos(
    args: {
      org: string,
      type?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Repos> {
    const path = `/orgs/${args.org}/repos`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  postOrgsOrgRepos(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PostRepo,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/orgs/${args.org}/repos`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getOrgsOrgTeams(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Teams> {
    const path = `/orgs/${args.org}/teams`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Teams>('GET', path, options);
  }

  postOrgsOrgTeams(
    args: {
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.OrgTeamsPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/orgs/${args.org}/teams`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getRateLimit(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.RateLimit> {
    const path = `/rate_limit`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.RateLimit>('GET', path, options);
  }

  deleteReposOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Repo> {
    const path = `/repos/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Repo>('GET', path, options);
  }

  patchReposOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RepoEdit,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Repo> {
    const path = `/repos/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Repo>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoAssignees(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Assignees> {
    const path = `/repos/${args.owner}/${args.repo}/assignees`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Assignees>('GET', path, options);
  }

  getReposOwnerRepoAssigneesAssignee(
    args: {
      owner: string,
      repo: string,
      assignee: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/assignees/${args.assignee}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getReposOwnerRepoBranches(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Branches> {
    const path = `/repos/${args.owner}/${args.repo}/branches`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Branches>('GET', path, options);
  }

  getReposOwnerRepoBranchesBranch(
    args: {
      owner: string,
      repo: string,
      branch: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Branch> {
    const path = `/repos/${args.owner}/${args.repo}/branches/${args.branch}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Branch>('GET', path, options);
  }

  getReposOwnerRepoCollaborators(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/repos/${args.owner}/${args.repo}/collaborators`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,
      repo: string,
      user: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/collaborators/${args.user}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,
      repo: string,
      user: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/collaborators/${args.user}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,
      repo: string,
      user: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/collaborators/${args.user}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  getReposOwnerRepoComments(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.RepoComments> {
    const path = `/repos/${args.owner}/${args.repo}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.RepoComments>('GET', path, options);
  }

  deleteReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.CommitComments> {
    const path = `/repos/${args.owner}/${args.repo}/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.CommitComments>('GET', path, options);
  }

  patchReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.CommitComments> {
    const path = `/repos/${args.owner}/${args.repo}/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.CommitComments>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoCommits(
    args: {
      owner: string,
      repo: string,
      since?: string,
      sha?: string,
      path?: string,
      author?: string,
      until?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Commits> {
    const path = `/repos/${args.owner}/${args.repo}/commits`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('since' in args) {
      options.params = options.params.set('since', String(args.since));
    }
    if ('sha' in args) {
      options.params = options.params.set('sha', String(args.sha));
    }
    if ('path' in args) {
      options.params = options.params.set('path', String(args.path));
    }
    if ('author' in args) {
      options.params = options.params.set('author', String(args.author));
    }
    if ('until' in args) {
      options.params = options.params.set('until', String(args.until));
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
    return this.sendRequest<models.Commits>('GET', path, options);
  }

  getReposOwnerRepoCommitsRefStatus(
    args: {
      owner: string,
      repo: string,
      ref: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.RefStatus> {
    const path = `/repos/${args.owner}/${args.repo}/commits/${args.ref}/status`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.RefStatus>('GET', path, options);
  }

  getReposOwnerRepoCommitsShaCode(
    args: {
      owner: string,
      repo: string,
      shaCode: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Commit> {
    const path = `/repos/${args.owner}/${args.repo}/commits/${args.shaCode}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Commit>('GET', path, options);
  }

  getReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,
      repo: string,
      shaCode: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.RepoComments> {
    const path = `/repos/${args.owner}/${args.repo}/commits/${args.shaCode}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.RepoComments>('GET', path, options);
  }

  postReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,
      repo: string,
      shaCode: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommitBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/commits/${args.shaCode}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoCompareBaseIdHeadId(
    args: {
      owner: string,
      repo: string,
      baseId: string,
      headId: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.CompareCommits> {
    const path = `/repos/${args.owner}/${args.repo}/compare/${args.baseId}...${args.headId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.CompareCommits>('GET', path, options);
  }

  deleteReposOwnerRepoContentsPath(
    args: {
      owner: string,
      repo: string,
      path: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.DeleteFileBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.DeleteFile> {
    const path = `/repos/${args.owner}/${args.repo}/contents/${args.path}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.DeleteFile>('DELETE', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoContentsPath(
    args: {
      owner: string,
      repo: string,
      path: string,
      path?: string,
      ref?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.ContentsPath> {
    const path = `/repos/${args.owner}/${args.repo}/contents/${args.path}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('path' in args) {
      options.params = options.params.set('path', String(args.path));
    }
    if ('ref' in args) {
      options.params = options.params.set('ref', String(args.ref));
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
    return this.sendRequest<models.ContentsPath>('GET', path, options);
  }

  putReposOwnerRepoContentsPath(
    args: {
      owner: string,
      repo: string,
      path: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CreateFileBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.CreateFile> {
    const path = `/repos/${args.owner}/${args.repo}/contents/${args.path}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.CreateFile>('PUT', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoContributors(
    args: {
      owner: string,
      repo: string,
      anon: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Contributors> {
    const path = `/repos/${args.owner}/${args.repo}/contributors`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('anon' in args) {
      options.params = options.params.set('anon', String(args.anon));
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
    return this.sendRequest<models.Contributors>('GET', path, options);
  }

  getReposOwnerRepoDeployments(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.RepoDeployments> {
    const path = `/repos/${args.owner}/${args.repo}/deployments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.RepoDeployments>('GET', path, options);
  }

  postReposOwnerRepoDeployments(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Deployment,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/deployments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoDeploymentsIdStatuses(
    args: {
      owner: string,
      repo: string,
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.DeploymentStatuses> {
    const path = `/repos/${args.owner}/${args.repo}/deployments/${args.id}/statuses`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.DeploymentStatuses>('GET', path, options);
  }

  postReposOwnerRepoDeploymentsIdStatuses(
    args: {
      owner: string,
      repo: string,
      id: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.DeploymentStatusesCreate,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/deployments/${args.id}/statuses`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoDownloads(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Downloads> {
    const path = `/repos/${args.owner}/${args.repo}/downloads`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Downloads>('GET', path, options);
  }

  deleteReposOwnerRepoDownloadsDownloadId(
    args: {
      owner: string,
      repo: string,
      downloadId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/downloads/${args.downloadId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoDownloadsDownloadId(
    args: {
      owner: string,
      repo: string,
      downloadId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Downloads> {
    const path = `/repos/${args.owner}/${args.repo}/downloads/${args.downloadId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Downloads>('GET', path, options);
  }

  getReposOwnerRepoEvents(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Events> {
    const path = `/repos/${args.owner}/${args.repo}/events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Events>('GET', path, options);
  }

  getReposOwnerRepoForks(
    args: {
      owner: string,
      repo: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Forks> {
    const path = `/repos/${args.owner}/${args.repo}/forks`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Forks>('GET', path, options);
  }

  postReposOwnerRepoForks(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ForkBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/forks`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  postReposOwnerRepoGitBlobs(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: Blob,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/git/blobs`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoGitBlobsShaCode(
    args: {
      owner: string,
      repo: string,
      shaCode: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<Blob> {
    const path = `/repos/${args.owner}/${args.repo}/git/blobs/${args.shaCode}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<Blob>('GET', path, options);
  }

  postReposOwnerRepoGitCommits(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RepoCommitBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/git/commits`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoGitCommitsShaCode(
    args: {
      owner: string,
      repo: string,
      shaCode: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.RepoCommit> {
    const path = `/repos/${args.owner}/${args.repo}/git/commits/${args.shaCode}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.RepoCommit>('GET', path, options);
  }

  getReposOwnerRepoGitRefs(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Refs> {
    const path = `/repos/${args.owner}/${args.repo}/git/refs`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Refs>('GET', path, options);
  }

  postReposOwnerRepoGitRefs(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RefsBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/git/refs`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoGitRefsRef(
    args: {
      owner: string,
      repo: string,
      ref: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/git/refs/${args.ref}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoGitRefsRef(
    args: {
      owner: string,
      repo: string,
      ref: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.HeadBranch> {
    const path = `/repos/${args.owner}/${args.repo}/git/refs/${args.ref}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.HeadBranch>('GET', path, options);
  }

  patchReposOwnerRepoGitRefsRef(
    args: {
      owner: string,
      repo: string,
      ref: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.GitRefPatch,
    },
    passedOptions?: HttpOptions
  ): Observable<models.HeadBranch> {
    const path = `/repos/${args.owner}/${args.repo}/git/refs/${args.ref}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.HeadBranch>('PATCH', path, options, JSON.stringify(args.body));
  }

  postReposOwnerRepoGitTags(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tag,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/git/tags`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoGitTagsShaCode(
    args: {
      owner: string,
      repo: string,
      shaCode: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Tag> {
    const path = `/repos/${args.owner}/${args.repo}/git/tags/${args.shaCode}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Tag>('GET', path, options);
  }

  postReposOwnerRepoGitTrees(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tree,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/git/trees`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoGitTreesShaCode(
    args: {
      owner: string,
      repo: string,
      shaCode: string,
      recursive?: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Tree> {
    const path = `/repos/${args.owner}/${args.repo}/git/trees/${args.shaCode}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('recursive' in args) {
      options.params = options.params.set('recursive', String(args.recursive));
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
    return this.sendRequest<models.Tree>('GET', path, options);
  }

  getReposOwnerRepoHooks(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Hook> {
    const path = `/repos/${args.owner}/${args.repo}/hooks`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Hook>('GET', path, options);
  }

  postReposOwnerRepoHooks(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HookBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/hooks`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoHooksHookId(
    args: {
      owner: string,
      repo: string,
      hookId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/hooks/${args.hookId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoHooksHookId(
    args: {
      owner: string,
      repo: string,
      hookId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Hook> {
    const path = `/repos/${args.owner}/${args.repo}/hooks/${args.hookId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Hook>('GET', path, options);
  }

  patchReposOwnerRepoHooksHookId(
    args: {
      owner: string,
      repo: string,
      hookId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HookBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Hook> {
    const path = `/repos/${args.owner}/${args.repo}/hooks/${args.hookId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Hook>('PATCH', path, options, JSON.stringify(args.body));
  }

  postReposOwnerRepoHooksHookIdTests(
    args: {
      owner: string,
      repo: string,
      hookId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/hooks/${args.hookId}/tests`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options);
  }

  getReposOwnerRepoIssues(
    args: {
      owner: string,
      repo: string,
      filter: string,
      state: string,
      labels: string,
      sort: string,
      direction: string,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Issues> {
    const path = `/repos/${args.owner}/${args.repo}/issues`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  postReposOwnerRepoIssues(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/issues`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoIssuesComments(
    args: {
      owner: string,
      repo: string,
      direction?: string,
      sort?: string,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.IssuesComments> {
    const path = `/repos/${args.owner}/${args.repo}/issues/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('direction' in args) {
      options.params = options.params.set('direction', String(args.direction));
    }
    if ('sort' in args) {
      options.params = options.params.set('sort', String(args.sort));
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
    return this.sendRequest<models.IssuesComments>('GET', path, options);
  }

  deleteReposOwnerRepoIssuesCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/issues/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoIssuesCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.IssuesComment> {
    const path = `/repos/${args.owner}/${args.repo}/issues/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.IssuesComment>('GET', path, options);
  }

  patchReposOwnerRepoIssuesCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.IssuesComment> {
    const path = `/repos/${args.owner}/${args.repo}/issues/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.IssuesComment>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoIssuesEvents(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Events> {
    const path = `/repos/${args.owner}/${args.repo}/issues/events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Events>('GET', path, options);
  }

  getReposOwnerRepoIssuesEventsEventId(
    args: {
      owner: string,
      repo: string,
      eventId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Event> {
    const path = `/repos/${args.owner}/${args.repo}/issues/events/${args.eventId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Event>('GET', path, options);
  }

  getReposOwnerRepoIssuesNumber(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Issue> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Issue>('GET', path, options);
  }

  patchReposOwnerRepoIssuesNumber(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Issue> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Issue>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.IssuesComments> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.IssuesComments>('GET', path, options);
  }

  postReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoIssuesNumberEvents(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Events> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Events>('GET', path, options);
  }

  deleteReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/labels`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Labels> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/labels`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Labels>('GET', path, options);
  }

  postReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/labels`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  putReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/labels`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoIssuesNumberLabelsName(
    args: {
      owner: string,
      repo: string,
      number: number,
      name: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/issues/${args.number}/labels/${args.name}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoKeys(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Keys> {
    const path = `/repos/${args.owner}/${args.repo}/keys`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Keys>('GET', path, options);
  }

  postReposOwnerRepoKeys(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserKeysPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/keys`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoKeysKeyId(
    args: {
      owner: string,
      repo: string,
      keyId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/keys/${args.keyId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoKeysKeyId(
    args: {
      owner: string,
      repo: string,
      keyId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId> {
    const path = `/repos/${args.owner}/${args.repo}/keys/${args.keyId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getReposOwnerRepoLabels(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Labels> {
    const path = `/repos/${args.owner}/${args.repo}/labels`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Labels>('GET', path, options);
  }

  postReposOwnerRepoLabels(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/labels`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoLabelsName(
    args: {
      owner: string,
      repo: string,
      name: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/labels/${args.name}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoLabelsName(
    args: {
      owner: string,
      repo: string,
      name: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Label> {
    const path = `/repos/${args.owner}/${args.repo}/labels/${args.name}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Label>('GET', path, options);
  }

  patchReposOwnerRepoLabelsName(
    args: {
      owner: string,
      repo: string,
      name: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Label> {
    const path = `/repos/${args.owner}/${args.repo}/labels/${args.name}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Label>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoLanguages(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Languages> {
    const path = `/repos/${args.owner}/${args.repo}/languages`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Languages>('GET', path, options);
  }

  postReposOwnerRepoMerges(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MergesBody,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/merges`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoMilestones(
    args: {
      owner: string,
      repo: string,
      state?: string,
      direction?: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Milestone> {
    const path = `/repos/${args.owner}/${args.repo}/milestones`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('state' in args) {
      options.params = options.params.set('state', String(args.state));
    }
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
    return this.sendRequest<models.Milestone>('GET', path, options);
  }

  postReposOwnerRepoMilestones(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/milestones`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/milestones/${args.number}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Milestone> {
    const path = `/repos/${args.owner}/${args.repo}/milestones/${args.number}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Milestone>('GET', path, options);
  }

  patchReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Milestone> {
    const path = `/repos/${args.owner}/${args.repo}/milestones/${args.number}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Milestone>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoMilestonesNumberLabels(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Labels> {
    const path = `/repos/${args.owner}/${args.repo}/milestones/${args.number}/labels`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Labels>('GET', path, options);
  }

  getReposOwnerRepoNotifications(
    args: {
      owner: string,
      repo: string,
      all?: boolean,
      participating?: boolean,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Notifications> {
    const path = `/repos/${args.owner}/${args.repo}/notifications`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('all' in args) {
      options.params = options.params.set('all', String(args.all));
    }
    if ('participating' in args) {
      options.params = options.params.set('participating', String(args.participating));
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
    return this.sendRequest<models.Notifications>('GET', path, options);
  }

  putReposOwnerRepoNotifications(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.NotificationMarkRead,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/notifications`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoPulls(
    args: {
      owner: string,
      repo: string,
      state?: string,
      head?: string,
      base?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Pulls> {
    const path = `/repos/${args.owner}/${args.repo}/pulls`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('state' in args) {
      options.params = options.params.set('state', String(args.state));
    }
    if ('head' in args) {
      options.params = options.params.set('head', String(args.head));
    }
    if ('base' in args) {
      options.params = options.params.set('base', String(args.base));
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
    return this.sendRequest<models.Pulls>('GET', path, options);
  }

  postReposOwnerRepoPulls(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/pulls`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoPullsComments(
    args: {
      owner: string,
      repo: string,
      direction?: string,
      sort?: string,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.IssuesComments> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('direction' in args) {
      options.params = options.params.set('direction', String(args.direction));
    }
    if ('sort' in args) {
      options.params = options.params.set('sort', String(args.sort));
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
    return this.sendRequest<models.IssuesComments>('GET', path, options);
  }

  deleteReposOwnerRepoPullsCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoPullsCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.PullsComment> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.PullsComment>('GET', path, options);
  }

  patchReposOwnerRepoPullsCommentsCommentId(
    args: {
      owner: string,
      repo: string,
      commentId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.PullsComment> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/comments/${args.commentId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.PullsComment>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoPullsNumber(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.PullRequest> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.PullRequest>('GET', path, options);
  }

  patchReposOwnerRepoPullsNumber(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullUpdate,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Repo> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Repo>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.PullsComment> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.PullsComment>('GET', path, options);
  }

  postReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsCommentPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}/comments`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoPullsNumberCommits(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Commits> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}/commits`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Commits>('GET', path, options);
  }

  getReposOwnerRepoPullsNumberFiles(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Pulls> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}/files`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Pulls>('GET', path, options);
  }

  getReposOwnerRepoPullsNumberMerge(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}/merge`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putReposOwnerRepoPullsNumberMerge(
    args: {
      owner: string,
      repo: string,
      number: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MergePullBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Merge> {
    const path = `/repos/${args.owner}/${args.repo}/pulls/${args.number}/merge`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Merge>('PUT', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoReadme(
    args: {
      owner: string,
      repo: string,
      ref?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.ContentsPath> {
    const path = `/repos/${args.owner}/${args.repo}/readme`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('ref' in args) {
      options.params = options.params.set('ref', String(args.ref));
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
    return this.sendRequest<models.ContentsPath>('GET', path, options);
  }

  getReposOwnerRepoReleases(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Releases> {
    const path = `/repos/${args.owner}/${args.repo}/releases`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Releases>('GET', path, options);
  }

  postReposOwnerRepoReleases(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/releases`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,
      repo: string,
      id: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/releases/assets/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,
      repo: string,
      id: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Asset> {
    const path = `/repos/${args.owner}/${args.repo}/releases/assets/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Asset>('GET', path, options);
  }

  patchReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,
      repo: string,
      id: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.AssetPatch,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Asset> {
    const path = `/repos/${args.owner}/${args.repo}/releases/assets/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Asset>('PATCH', path, options, JSON.stringify(args.body));
  }

  deleteReposOwnerRepoReleasesId(
    args: {
      owner: string,
      repo: string,
      id: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/releases/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoReleasesId(
    args: {
      owner: string,
      repo: string,
      id: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Release> {
    const path = `/repos/${args.owner}/${args.repo}/releases/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Release>('GET', path, options);
  }

  patchReposOwnerRepoReleasesId(
    args: {
      owner: string,
      repo: string,
      id: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Release> {
    const path = `/repos/${args.owner}/${args.repo}/releases/${args.id}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Release>('PATCH', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoReleasesIdAssets(
    args: {
      owner: string,
      repo: string,
      id: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Assets> {
    const path = `/repos/${args.owner}/${args.repo}/releases/${args.id}/assets`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Assets>('GET', path, options);
  }

  getReposOwnerRepoStargazers(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/repos/${args.owner}/${args.repo}/stargazers`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getReposOwnerRepoStatsCodeFrequency(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.CodeFrequencyStats> {
    const path = `/repos/${args.owner}/${args.repo}/stats/code_frequency`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.CodeFrequencyStats>('GET', path, options);
  }

  getReposOwnerRepoStatsCommitActivity(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.CommitActivityStats> {
    const path = `/repos/${args.owner}/${args.repo}/stats/commit_activity`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.CommitActivityStats>('GET', path, options);
  }

  getReposOwnerRepoStatsContributors(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.ContributorsStats> {
    const path = `/repos/${args.owner}/${args.repo}/stats/contributors`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.ContributorsStats>('GET', path, options);
  }

  getReposOwnerRepoStatsParticipation(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.ParticipationStats> {
    const path = `/repos/${args.owner}/${args.repo}/stats/participation`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.ParticipationStats>('GET', path, options);
  }

  getReposOwnerRepoStatsPunchCard(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.CodeFrequencyStats> {
    const path = `/repos/${args.owner}/${args.repo}/stats/punch_card`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.CodeFrequencyStats>('GET', path, options);
  }

  getReposOwnerRepoStatusesRef(
    args: {
      owner: string,
      repo: string,
      ref: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Ref> {
    const path = `/repos/${args.owner}/${args.repo}/statuses/${args.ref}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Ref>('GET', path, options);
  }

  postReposOwnerRepoStatusesRef(
    args: {
      owner: string,
      repo: string,
      ref: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HeadBranch,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/statuses/${args.ref}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoSubscribers(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/repos/${args.owner}/${args.repo}/subscribers`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteReposOwnerRepoSubscription(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/subscription`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getReposOwnerRepoSubscription(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Subscribition> {
    const path = `/repos/${args.owner}/${args.repo}/subscription`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Subscribition>('GET', path, options);
  }

  putReposOwnerRepoSubscription(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.SubscribitionBody,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Subscribition> {
    const path = `/repos/${args.owner}/${args.repo}/subscription`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Subscribition>('PUT', path, options, JSON.stringify(args.body));
  }

  getReposOwnerRepoTags(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Tags> {
    const path = `/repos/${args.owner}/${args.repo}/tags`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Tags>('GET', path, options);
  }

  getReposOwnerRepoTeams(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Teams> {
    const path = `/repos/${args.owner}/${args.repo}/teams`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Teams>('GET', path, options);
  }

  getReposOwnerRepoWatchers(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/repos/${args.owner}/${args.repo}/watchers`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getReposOwnerRepoArchiveFormatPath(
    args: {
      owner: string,
      repo: string,
      archiveFormat: string,
      path: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/repos/${args.owner}/${args.repo}/${args.archiveFormat}/${args.path}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getRepositories(
    args: {
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Repositories> {
    const path = `/repositories`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Repositories>('GET', path, options);
  }

  getSearchCode(
    args: {
      order?: string,
      q: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchCode> {
    const path = `/search/code`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    if ('q' in args) {
      options.params = options.params.set('q', String(args.q));
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
    return this.sendRequest<models.SearchCode>('GET', path, options);
  }

  getSearchIssues(
    args: {
      order?: string,
      q: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchIssues> {
    const path = `/search/issues`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    if ('q' in args) {
      options.params = options.params.set('q', String(args.q));
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
    return this.sendRequest<models.SearchIssues>('GET', path, options);
  }

  getSearchRepositories(
    args: {
      order?: string,
      q: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchRepositories> {
    const path = `/search/repositories`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    if ('q' in args) {
      options.params = options.params.set('q', String(args.q));
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
    return this.sendRequest<models.SearchRepositories>('GET', path, options);
  }

  getSearchUsers(
    args: {
      order?: string,
      q: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.SearchUsers> {
    const path = `/search/users`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

    if ('order' in args) {
      options.params = options.params.set('order', String(args.order));
    }
    if ('q' in args) {
      options.params = options.params.set('q', String(args.q));
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
    return this.sendRequest<models.SearchUsers>('GET', path, options);
  }

  deleteTeamsTeamId(
    args: {
      teamId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getTeamsTeamId(
    args: {
      teamId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Team> {
    const path = `/teams/${args.teamId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Team>('GET', path, options);
  }

  patchTeamsTeamId(
    args: {
      teamId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EditTeam,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Team> {
    const path = `/teams/${args.teamId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Team>('PATCH', path, options, JSON.stringify(args.body));
  }

  getTeamsTeamIdMembers(
    args: {
      teamId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/teams/${args.teamId}/members`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteTeamsTeamIdMembersUsername(
    args: {
      teamId: number,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}/members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getTeamsTeamIdMembersUsername(
    args: {
      teamId: number,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}/members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putTeamsTeamIdMembersUsername(
    args: {
      teamId: number,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}/members/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  deleteTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}/memberships/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.TeamMembership> {
    const path = `/teams/${args.teamId}/memberships/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.TeamMembership>('GET', path, options);
  }

  putTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.TeamMembership> {
    const path = `/teams/${args.teamId}/memberships/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.TeamMembership>('PUT', path, options);
  }

  getTeamsTeamIdRepos(
    args: {
      teamId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.TeamRepos> {
    const path = `/teams/${args.teamId}/repos`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.TeamRepos>('GET', path, options);
  }

  putTeamsTeamIdReposOrgRepo(
    args: {
      teamId: number,
      org: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}/repos/${args.org}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  deleteTeamsTeamIdReposOwnerRepo(
    args: {
      teamId: number,
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}/repos/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getTeamsTeamIdReposOwnerRepo(
    args: {
      teamId: number,
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/teams/${args.teamId}/repos/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUser(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/user`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  patchUser(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserUpdate,
    },
    passedOptions?: HttpOptions
  ): Observable<models.User> {
    const path = `/user`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteUserEmails(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserEmails,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/emails`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options, JSON.stringify(args.body));
  }

  getUserEmails(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.UserEmails> {
    const path = `/user/emails`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  postUserEmails(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/emails`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getUserFollowers(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/user/followers`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUserFollowing(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/user/following`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteUserFollowingUsername(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/following/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getUserFollowingUsername(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/following/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putUserFollowingUsername(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/following/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  getUserIssues(
    args: {
      filter: string,
      state: string,
      labels: string,
      sort: string,
      direction: string,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Issues> {
    const path = `/user/issues`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUserKeys(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/user/keys`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  postUserKeys(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserKeysPost,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/keys`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  deleteUserKeysKeyId(
    args: {
      keyId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/keys/${args.keyId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getUserKeysKeyId(
    args: {
      keyId: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId> {
    const path = `/user/keys/${args.keyId}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUserOrgs(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/user/orgs`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUserRepos(
    args: {
      type?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Repos> {
    const path = `/user/repos`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  postUserRepos(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PostRepo,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/repos`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('POST', path, options, JSON.stringify(args.body));
  }

  getUserStarred(
    args: {
      direction?: string,
      sort?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/user/starred`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteUserStarredOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/starred/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getUserStarredOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/starred/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putUserStarredOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/starred/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  getUserSubscriptions(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.UserUserIdSubscribitions> {
    const path = `/user/subscriptions`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  deleteUserSubscriptionsOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/subscriptions/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('DELETE', path, options);
  }

  getUserSubscriptionsOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/subscriptions/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  putUserSubscriptionsOwnerRepo(
    args: {
      owner: string,
      repo: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/user/subscriptions/${args.owner}/${args.repo}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('PUT', path, options);
  }

  getUserTeams(
    args: {
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.TeamsList> {
    const path = `/user/teams`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUsers(
    args: {
      since?: number,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/users`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Users>('GET', path, options);
  }

  getUsersUsername(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/users/${args.username}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUsersUsernameEvents(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.username}/events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersUsernameEventsOrgsOrg(
    args: {
      username: string,
      org: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.username}/events/orgs/${args.org}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersUsernameFollowers(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Users> {
    const path = `/users/${args.username}/followers`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUsersUsernameFollowingTargetUser(
    args: {
      username: string,
      targetUser: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.username}/following/${args.targetUser}`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersUsernameGists(
    args: {
      username: string,
      since?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gists> {
    const path = `/users/${args.username}/gists`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<models.Gists>('GET', path, options);
  }

  getUsersUsernameKeys(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/users/${args.username}/keys`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUsersUsernameOrgs(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Gitignore> {
    const path = `/users/${args.username}/orgs`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUsersUsernameReceivedEvents(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.username}/received_events`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersUsernameReceivedEventsPublic(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.username}/received_events/public`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersUsernameRepos(
    args: {
      username: string,
      type?: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<models.Repos> {
    const path = `/users/${args.username}/repos`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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

  getUsersUsernameStarred(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.username}/starred`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
  }

  getUsersUsernameSubscriptions(
    args: {
      username: string,
      xGitHubMediaType?: string,
      accept?: string,
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    passedOptions?: HttpOptions
  ): Observable<any> {
    const path = `/users/${args.username}/subscriptions`;
    const options: APIHttpOptions = {...this.options, ...passedOptions};

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
    return this.sendRequest<any>('GET', path, options);
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
        return Observable.throw(`Unsupported request: ${method}`);
    }
  }
}
