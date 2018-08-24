/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface UserAPIClientInterface {

  /**
   * Get the authenticated user.
   */
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
  ): Observable<models.User>;

  /**
   * Update the authenticated user.
   */
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
  ): Observable<models.User>;

  /**
   * Delete email address(es).
   * You can include a single email address or an array of addresses.
   * 
   */
  deleteUserEmails(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserEmails,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List email addresses for a user.
   * In the final version of the API, this method will return an array of hashes
   * with extended information for each email address indicating if the address
   * has been verified and if it's primary email address for GitHub.
   * Until API v3 is finalized, use the application/vnd.github.v3 media type to
   * get other response format.
   * 
   */
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
  ): Observable<models.UserEmails>;

  /**
   * Add email address(es).
   * You can post a single email address or an array of addresses.
   * 
   */
  postUserEmails(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List the authenticated user's followers
   */
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
  ): Observable<models.Users>;

  /**
   * List who the authenticated user is following.
   */
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
  ): Observable<models.Users>;

  /**
   * Unfollow a user.
   * Unfollowing a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   */
  deleteUserFollowingUsername(
    args: {
      username: string,  // Name of user.
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
   * Check if you are following a user.
   */
  getUserFollowingUsername(
    args: {
      username: string,  // Name of user.
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
   * Follow a user.
   * Following a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   */
  putUserFollowingUsername(
    args: {
      username: string,  // Name of user.
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
   * List issues.
   * List all issues across owned and member repositories for the authenticated
   * user.
   * 
   */
  getUserIssues(
    args: {
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
  ): Observable<models.Issues>;

  /**
   * List your public keys.
   * Lists the current user's keys. Management of public keys via the API requires
   * that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
   * 
   */
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
  ): Observable<models.Gitignore>;

  /**
   * Create a public key.
   */
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
  ): Observable<models.UserKeysKeyId>;

  /**
   * Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
   */
  deleteUserKeysKeyId(
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
  ): Observable<any>;

  /**
   * Get a single public key.
   */
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
  ): Observable<models.UserKeysKeyId>;

  /**
   * List public and private organizations for the authenticated user.
   */
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
  ): Observable<models.Gitignore>;

  /**
   * List repositories for the authenticated user. Note that this does not include
   * repositories owned by organizations which the user can access. You can lis
   * user organizations and list organization repositories separately.
   * 
   */
  getUserRepos(
    args: {
      type?: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repos>;

  /**
   * Create a new repository for the authenticated user. OAuth users must supply
   * repo scope.
   * 
   */
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
  ): Observable<models.Repos>;

  /**
   * List repositories being starred by the authenticated user.
   */
  getUserStarred(
    args: {
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Gitignore>;

  /**
   * Unstar a repository
   */
  deleteUserStarredOwnerRepo(
    args: {
      owner: string,  // Name of a repository owner.
      repo: string,  // Name of a repository.
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
   * Check if you are starring a repository.
   */
  getUserStarredOwnerRepo(
    args: {
      owner: string,  // Name of a repository owner.
      repo: string,  // Name of a repository.
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
   * Star a repository.
   */
  putUserStarredOwnerRepo(
    args: {
      owner: string,  // Name of a repository owner.
      repo: string,  // Name of a repository.
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
   * List repositories being watched by the authenticated user.
   */
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
  ): Observable<models.UserUserIdSubscribitions>;

  /**
   * Stop watching a repository
   */
  deleteUserSubscriptionsOwnerRepo(
    args: {
      owner: string,  // Name of the owner.
      repo: string,  // Name of repository.
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
   * Check if you are watching a repository.
   */
  getUserSubscriptionsOwnerRepo(
    args: {
      owner: string,  // Name of the owner.
      repo: string,  // Name of repository.
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
   * Watch a repository.
   */
  putUserSubscriptionsOwnerRepo(
    args: {
      owner: string,  // Name of the owner.
      repo: string,  // Name of repository.
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
   * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
   */
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
  ): Observable<models.TeamsList>;

}
