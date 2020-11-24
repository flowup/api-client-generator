/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, NotificationsAPIClient } from './notifications-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedNotificationsAPIClient extends NotificationsAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getNotifications(
    args: {
      all?: boolean,  // (optional) True to show notifications marked as read.
      participating?: boolean,  // (optional) True to show only notifications in which the user is directly participating or mentioned. 
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications> {
    return super.getNotifications(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isNotifications(res) || console.error(`TypeGuard for response 'models.Notifications' caught inconsistency.`, res)));
  }

  getNotificationsThreadsId(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications> {
    return super.getNotificationsThreadsId(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isNotifications(res) || console.error(`TypeGuard for response 'models.Notifications' caught inconsistency.`, res)));
  }

  getNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscription> {
    return super.getNotificationsThreadsIdSubscription(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isSubscription(res) || console.error(`TypeGuard for response 'models.Subscription' caught inconsistency.`, res)));
  }

  putNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PutSubscription,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscription> {
    return super.putNotificationsThreadsIdSubscription(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isSubscription(res) || console.error(`TypeGuard for response 'models.Subscription' caught inconsistency.`, res)));
  }

}
