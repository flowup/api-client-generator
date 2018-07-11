/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  /**
   * Lists all the emojis available to use on GitHub.
   */
  getEmojis(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Emojis>;

  /**
   * List public events.
   */
  getEvents(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * List Feeds.
   * GitHub provides several timeline resources in Atom format. The Feeds API
   * 
   *  lists all the feeds available to the authenticating user.
   * 
   */
  getFeeds(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Feeds>;

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
  ): Observable<any>;

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
  ): Observable<any>;

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

  /**
   * Listing available templates.
   * List all templates available to pass as an option when creating a repository.
   * 
   */
  getGitignoreTemplates(
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
   * Get a single template.
   */
  getGitignoreTemplatesLanguage(
    args: {
      language: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GitignoreLang>;

  /**
   * List issues.
   * List all issues across all the authenticated user's visible repositories.
   * 
   */
  getIssues(
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
   * Find issues by state and keyword.
   */
  getLegacyIssuesSearchOwnerRepositoryStateKeyword(
    args: {
      keyword: string,  // The search term.
      state: string,  // Indicates the state of the issues to return. Can be either open or closed.
      owner: string,
      repository: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchIssuesByKeyword>;

  /**
   * Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.
   */
  getLegacyReposSearchKeyword(
    args: {
      keyword: string,  // The search term
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      language?: string,  // (optional) Filter results by language
      startPage?: string,  // (optional) The page number to fetch
      sort?: string,  // (optional) The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchRepositoriesByKeyword>;

  /**
   * This API call is added for compatibility reasons only.
   */
  getLegacyUserEmailEmail(
    args: {
      email: string,  // The email address
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchUserByEmail>;

  /**
   * Find users by keyword.
   */
  getLegacyUserSearchKeyword(
    args: {
      keyword: string,  // The search term
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      startPage?: string,  // (optional) The page number to fetch
      sort?: string,  // (optional) The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchUsersByKeyword>;

  /**
   * Render an arbitrary Markdown document
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
  ): Observable<any>;

  /**
   * Render a Markdown document in raw mode
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
  ): Observable<any>;

  /**
   * This gives some information about GitHub.com, the service.
   */
  getMeta(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Meta>;

  /**
   * List public events for a network of repositories.
   */
  getNetworksOwnerRepoEvents(
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
  ): Observable<models.Events>;

  /**
   * List your notifications.
   * List all notifications for the current user, grouped by repository.
   * 
   */
  getNotifications(
    args: {
      all?: boolean,  // (optional) True to show notifications marked as read.
      participating?: boolean,  // (optional) True to show only notifications in which the user is directly participating or mentioned. 
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications>;

  /**
   * Mark as read.
   * Marking a notification as "read" removes it from the default view on GitHub.com.
   * 
   */
  putNotifications(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.NotificationMarkRead,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * View a single thread.
   */
  getNotificationsThreadsId(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications>;

  /**
   * Mark a thread as read
   */
  patchNotificationsThreadsId(
    args: {
      id: number,  // Id of thread.
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
   * Delete a Thread Subscription.
   */
  deleteNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
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
   * Get a Thread Subscription.
   */
  getNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscription>;

  /**
   * Set a Thread Subscription.
   * This lets you subscribe to a thread, or ignore it. Subscribing to a thread
   * is unnecessary if the user is already subscribed to the repository. Ignoring
   * a thread will mute all future notifications (until you comment or get @mentioned).
   * 
   */
  putNotificationsThreadsIdSubscription(
    args: {
      id: number,  // Id of thread.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PutSubscription,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscription>;

  /**
   * Get an Organization.
   */
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
  ): Observable<models.Organization>;

  /**
   * Edit an Organization.
   */
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
  ): Observable<models.Organization>;

  /**
   * List public events for an organization.
   */
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
  ): Observable<models.Events>;

  /**
   * List issues.
   * List all issues for a given organization for the authenticated user.
   * 
   */
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
  ): Observable<models.Issues>;

  /**
   * Members list.
   * List all users who are members of an organization. A member is a user tha
   * belongs to at least 1 team in the organization. If the authenticated user
   * is also an owner of this organization then both concealed and public members
   * will be returned. If the requester is not an owner of the organization the
   * query will be redirected to the public members list.
   * 
   */
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
  ): Observable<models.Users>;

  /**
   * Remove a member.
   * Removing a user from this list will remove them from all teams and they
   * will no longer have any access to the organization's repositories.
   * 
   */
  deleteOrgsOrgMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Check if a user is, publicly or privately, a member of the organization.
   */
  getOrgsOrgMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Public members list.
   * Members of an organization can choose to have their membership publicized
   * or not.
   * 
   */
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
  ): Observable<models.Users>;

  /**
   * Conceal a user's membership.
   */
  deleteOrgsOrgPublicMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Check public membership.
   */
  getOrgsOrgPublicMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * Publicize a user's membership.
   */
  putOrgsOrgPublicMembersUsername(
    args: {
      org: string,  // Name of organisation.
      username: string,  // Name of the user.
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
   * List repositories for the specified org.
   */
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
  ): Observable<models.Repos>;

  /**
   * Create a new repository for the authenticated user. OAuth users must supply
   * repo scope.
   * 
   */
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
  ): Observable<any>;

  /**
   * List teams.
   */
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
  ): Observable<models.Teams>;

  /**
   * Create team.
   * In order to create a team, the authenticated user must be an owner of organization.
   * 
   */
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
  ): Observable<any>;

  /**
   * Get your current rate limit status
   * Note: Accessing this endpoint does not count against your rate limit.
   * 
   */
  getRateLimit(
    args: {
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RateLimit>;

  /**
   * Delete a Repository.
   * Deleting a repository requires admin access. If OAuth is used, the delete_repo
   * scope is required.
   * 
   */
  deleteReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
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
   * Get repository.
   */
  getReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo>;

  /**
   * Edit repository.
   */
  patchReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RepoEdit,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo>;

  /**
   * List assignees.
   * This call lists all the available assignees (owner + collaborators) to which
   * issues may be assigned.
   * 
   */
  getReposOwnerRepoAssignees(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Assignees>;

  /**
   * Check assignee.
   * You may also check to see if a particular user is an assignee for a repository.
   * 
   */
  getReposOwnerRepoAssigneesAssignee(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      assignee: string,  // Login of the assignee.
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
   * Get list of branches
   */
  getReposOwnerRepoBranches(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Branches>;

  /**
   * Get Branch
   */
  getReposOwnerRepoBranchesBranch(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      branch: string,  // Name of the branch.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Branch>;

  /**
   * List.
   * When authenticating as an organization owner of an organization-owned
   * repository, all organization owners are included in the list of
   * collaborators. Otherwise, only users with access to the repository are
   * returned in the collaborators list.
   * 
   */
  getReposOwnerRepoCollaborators(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
   * Remove collaborator.
   */
  deleteReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      user: string,  // Login of the user.
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
   * Check if user is a collaborator
   */
  getReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      user: string,  // Login of the user.
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
   * Add collaborator.
   */
  putReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      user: string,  // Login of the user.
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
   * List commit comments for a repository.
   * Comments are ordered by ascending ID.
   * 
   */
  getReposOwnerRepoComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoComments>;

  /**
   * Delete a commit comment
   */
  deleteReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
   * Get a single commit comment.
   */
  getReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments>;

  /**
   * Update a commit comment.
   */
  patchReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments>;

  /**
   * List commits on a repository.
   */
  getReposOwnerRepoCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      sha?: string,  // (optional) Sha or branch to start listing commits from.
      path?: string,  // (optional) Only commits containing this file path will be returned.
      author?: string,  // (optional) GitHub login, name, or email by which to filter by commit author.
      until?: string,  // (optional) ISO 8601 Date - Only commits before this date will be returned.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commits>;

  /**
   * Get the combined Status for a specific Ref
   * The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details.
   * To access this endpoint during the preview period, you must provide a custom media type in the Accept header:
   * application/vnd.github.she-hulk-preview+json
   * 
   */
  getReposOwnerRepoCommitsRefStatus(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RefStatus>;

  /**
   * Get a single commit.
   */
  getReposOwnerRepoCommitsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commit>;

  /**
   * List comments for a single commitList comments for a single commit.
   */
  getReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoComments>;

  /**
   * Create a commit comment.
   */
  postReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommitBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Compare two commits
   */
  getReposOwnerRepoCompareBaseIdHeadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      baseId: string,
      headId: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CompareCommits>;

  /**
   * Delete a file.
   * This method deletes a file in a repository.
   * 
   */
  deleteReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.DeleteFileBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeleteFile>;

  /**
   * Get contents.
   * This method returns the contents of a file or directory in a repository.
   * Files and symlinks support a custom media type for getting the raw content.
   * Directories and submodules do not support custom media types.
   * Note: This API supports files up to 1 megabyte in size.
   * Here can be many outcomes. For details see "http://developer.github.com/v3/repos/contents/"
   * 
   */
  getReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      queryPath?: string,  // (optional) The content path.
      ref?: string,  // (optional) The String name of the Commit/Branch/Tag. Defaults to 'master'.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContentsPath>;

  /**
   * Create a file.
   */
  putReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CreateFileBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateFile>;

  /**
   * Get list of contributors.
   */
  getReposOwnerRepoContributors(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      anon: string,  // Set to 1 or true to include anonymous contributors in results.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Contributors>;

  /**
   * Users with pull access can view deployments for a repository
   */
  getReposOwnerRepoDeployments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoDeployments>;

  /**
   * Users with push access can create a deployment for a given ref
   */
  postReposOwnerRepoDeployments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Deployment,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Users with pull access can view deployment statuses for a deployment
   */
  getReposOwnerRepoDeploymentsIdStatuses(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: number,  // The Deployment ID to list the statuses from.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeploymentStatuses>;

  /**
   * Create a Deployment Status
   * Users with push access can create deployment statuses for a given deployment:
   * 
   */
  postReposOwnerRepoDeploymentsIdStatuses(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: number,  // The Deployment ID to list the statuses from.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.DeploymentStatusesCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Deprecated. List downloads for a repository.
   */
  getReposOwnerRepoDownloads(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Downloads>;

  /**
   * Deprecated. Delete a download.
   */
  deleteReposOwnerRepoDownloadsDownloadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      downloadId: number,  // Id of download.
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
   * Deprecated. Get a single download.
   */
  getReposOwnerRepoDownloadsDownloadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      downloadId: number,  // Id of download.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Downloads>;

  /**
   * Get list of repository events.
   */
  getReposOwnerRepoEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * List forks.
   */
  getReposOwnerRepoForks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      sort?: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Forks>;

  /**
   * Create a fork.
   * Forking a Repository happens asynchronously. Therefore, you may have to wai
   * a short period before accessing the git objects. If this takes longer than 5
   * minutes, be sure to contact Support.
   * 
   */
  postReposOwnerRepoForks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ForkBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Create a Blob.
   */
  postReposOwnerRepoGitBlobs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: Blob,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Get a Blob.
   * Since blobs can be any arbitrary binary data, the input and responses for
   * the blob API takes an encoding parameter that can be either utf-8 or
   * base64. If your data cannot be losslessly sent as a UTF-8 string, you can
   * base64 encode it.
   * 
   */
  getReposOwnerRepoGitBlobsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<Blob>;

  /**
   * Create a Commit.
   */
  postReposOwnerRepoGitCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RepoCommitBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Get a Commit.
   */
  getReposOwnerRepoGitCommitsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoCommit>;

  /**
   * Get all References
   */
  getReposOwnerRepoGitRefs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Refs>;

  /**
   * Create a Reference
   */
  postReposOwnerRepoGitRefs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RefsBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Delete a Reference
   * Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a 
   * Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
   * 
   */
  deleteReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
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
   * Get a Reference
   */
  getReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.HeadBranch>;

  /**
   * Update a Reference
   */
  patchReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.GitRefPatch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.HeadBranch>;

  /**
   * Create a Tag Object.
   * Note that creating a tag object does not create the reference that makes a
   * tag in Git. If you want to create an annotated tag in Git, you have to do
   * this call to create the tag object, and then create the refs/tags/[tag]
   * reference. If you want to create a lightweight tag, you only have to create
   * the tag reference - this call would be unnecessary.
   * 
   */
  postReposOwnerRepoGitTags(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tag,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Get a Tag.
   */
  getReposOwnerRepoGitTagsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tag>;

  /**
   * Create a Tree.
   * The tree creation API will take nested entries as well. If both a tree and
   * a nested path modifying that tree are specified, it will overwrite the
   * contents of that tree with the new path contents and write a new tree out.
   * 
   */
  postReposOwnerRepoGitTrees(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tree,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Get a Tree.
   */
  getReposOwnerRepoGitTreesShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // Tree SHA.
      recursive?: number,  // (optional) Get a Tree Recursively. (0 or 1)
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tree>;

  /**
   * Get list of hooks.
   */
  getReposOwnerRepoHooks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook>;

  /**
   * Create a hook.
   */
  postReposOwnerRepoHooks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HookBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Delete a hook.
   */
  deleteReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
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
   * Get single hook.
   */
  getReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook>;

  /**
   * Edit a hook.
   */
  patchReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HookBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook>;

  /**
   * Test a push hook.
   * This will trigger the hook with the latest push to the current repository
   * if the hook is subscribed to push events. If the hook is not subscribed
   * to push events, the server will respond with 204 but no test POST will
   * be generated.
   * Note: Previously /repos/:owner/:repo/hooks/:id/tes
   * 
   */
  postReposOwnerRepoHooksHookIdTests(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
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
   * List issues for a repository.
   */
  getReposOwnerRepoIssues(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
   * Create an issue.
   * Any user with pull access to a repository can create an issue.
   * 
   */
  postReposOwnerRepoIssues(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List comments in a repository.
   */
  getReposOwnerRepoIssuesComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: string,
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments>;

  /**
   * Delete a comment.
   */
  deleteReposOwnerRepoIssuesCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
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
  getReposOwnerRepoIssuesCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment>;

  /**
   * Edit a comment.
   */
  patchReposOwnerRepoIssuesCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment>;

  /**
   * List issue events for a repository.
   */
  getReposOwnerRepoIssuesEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * Get a single event.
   */
  getReposOwnerRepoIssuesEventsEventId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      eventId: number,  // Id of the event.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Event>;

  /**
   * Get a single issue
   */
  getReposOwnerRepoIssuesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issue>;

  /**
   * Edit an issue.
   * Issue owners and users with push access can edit an issue.
   * 
   */
  patchReposOwnerRepoIssuesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issue>;

  /**
   * List comments on an issue.
   */
  getReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments>;

  /**
   * Create a comment.
   */
  postReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List events for an issue.
   */
  getReposOwnerRepoIssuesNumberEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * Remove all labels from an issue.
   */
  deleteReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
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
   * List labels on an issue.
   */
  getReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels>;

  /**
   * Add labels to an issue.
   */
  postReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
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
   * Replace all labels for an issue.
   * Sending an empty array ([]) will remove all Labels from the Issue.
   * 
   */
  putReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
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
   * Remove a label from an issue.
   */
  deleteReposOwnerRepoIssuesNumberLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      name: string,  // Name of the label.
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
   * Get list of keys.
   */
  getReposOwnerRepoKeys(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Keys>;

  /**
   * Create a key.
   */
  postReposOwnerRepoKeys(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserKeysPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Delete a key.
   */
  deleteReposOwnerRepoKeysKeyId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      keyId: number,  // Id of key.
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
   * Get a key
   */
  getReposOwnerRepoKeysKeyId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      keyId: number,  // Id of key.
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
   * List all labels for this repository.
   */
  getReposOwnerRepoLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels>;

  /**
   * Create a label.
   */
  postReposOwnerRepoLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
   * Delete a label.
   */
  deleteReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
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
   * Get a single label.
   */
  getReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label>;

  /**
   * Update a label.
   */
  patchReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label>;

  /**
   * List languages.
   * List languages for the specified repository. The value on the right of a
   * language is the number of bytes of code written in that language.
   * 
   */
  getReposOwnerRepoLanguages(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Languages>;

  /**
   * Perform a merge.
   */
  postReposOwnerRepoMerges(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MergesBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List milestones for a repository.
   */
  getReposOwnerRepoMilestones(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      state?: string,  // (optional) String to filter by state.
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
  ): Observable<models.Milestone>;

  /**
   * Create a milestone.
   */
  postReposOwnerRepoMilestones(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Delete a milestone.
   */
  deleteReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
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
   * Get a single milestone.
   */
  getReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone>;

  /**
   * Update a milestone.
   */
  patchReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone>;

  /**
   * Get labels for every issue in a milestone.
   */
  getReposOwnerRepoMilestonesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels>;

  /**
   * List your notifications in a repository
   * List all notifications for the current user.
   * 
   */
  getReposOwnerRepoNotifications(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      all?: boolean,  // (optional) True to show notifications marked as read.
      participating?: boolean,  // (optional) True to show only notifications in which the user is directly participating or mentioned. 
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Notifications>;

  /**
   * Mark notifications as read in a repository.
   * Marking all notifications in a repository as "read" removes them from the
   * default view on GitHub.com.
   * 
   */
  putReposOwnerRepoNotifications(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.NotificationMarkRead,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List pull requests.
   */
  getReposOwnerRepoPulls(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      state?: string,  // (optional) String to filter by state.
      head?: string,  // (optional) Filter pulls by head user and branch name in the format of 'user:ref-name'. Example: github:new-script-format. 
      base?: string,  // (optional) Filter pulls by base branch name. Example - gh-pages.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls>;

  /**
   * Create a pull request.
   */
  postReposOwnerRepoPulls(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List comments in a repository.
   * By default, Review Comments are ordered by ascending ID.
   * 
   */
  getReposOwnerRepoPullsComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: string,
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments>;

  /**
   * Delete a comment.
   */
  deleteReposOwnerRepoPullsCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
  getReposOwnerRepoPullsCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment>;

  /**
   * Edit a comment.
   */
  patchReposOwnerRepoPullsCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment>;

  /**
   * Get a single pull request.
   */
  getReposOwnerRepoPullsNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullRequest>;

  /**
   * Update a pull request.
   */
  patchReposOwnerRepoPullsNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo>;

  /**
   * List comments on a pull request.
   */
  getReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment>;

  /**
   * Create a comment.
   * 
   *   #TODO Alternative input
   * ( http://developer.github.com/v3/pulls/comments/ )
   * 
   *   description: |
   * 
   *     Alternative Input.
   * 
   *     Instead of passing commit_id, path, and position you can reply to an
   * 
   *     existing Pull Request Comment like this:
   * 
   * 
   * 
   *         body
   * 
   *            Required string
   * 
   *         in_reply_to
   * 
   *            Required number - Comment id to reply to.
   * 
   */
  postReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsCommentPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List commits on a pull request.
   */
  getReposOwnerRepoPullsNumberCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commits>;

  /**
   * List pull requests files.
   */
  getReposOwnerRepoPullsNumberFiles(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls>;

  /**
   * Get if a pull request has been merged.
   */
  getReposOwnerRepoPullsNumberMerge(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
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
   * Merge a pull request (Merge Button's)
   */
  putReposOwnerRepoPullsNumberMerge(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MergePullBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Merge>;

  /**
   * Get the README.
   * This method returns the preferred README for a repository.
   * 
   */
  getReposOwnerRepoReadme(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref?: string,  // (optional) The String name of the Commit/Branch/Tag. Defaults to master.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContentsPath>;

  /**
   * Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only
   */
  getReposOwnerRepoReleases(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Releases>;

  /**
   * Create a release
   * Users with push access to the repository can create a release.
   * 
   */
  postReposOwnerRepoReleases(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * Delete a release asset
   */
  deleteReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
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
   * Get a single release asset
   */
  getReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Asset>;

  /**
   * Edit a release asset
   * Users with push access to the repository can edit a release asset.
   * 
   */
  patchReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.AssetPatch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Asset>;

  /**
   * Users with push access to the repository can delete a release.
   */
  deleteReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
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
   * Get a single release
   */
  getReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release>;

  /**
   * Users with push access to the repository can edit a release
   */
  patchReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release>;

  /**
   * List assets for a release
   */
  getReposOwnerRepoReleasesIdAssets(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Assets>;

  /**
   * List Stargazers.
   */
  getReposOwnerRepoStargazers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
   * Get the number of additions and deletions per week.
   * Returns a weekly aggregate of the number of additions and deletions pushed
   * to a repository.
   * 
   */
  getReposOwnerRepoStatsCodeFrequency(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CodeFrequencyStats>;

  /**
   * Get the last year of commit activity data.
   * Returns the last year of commit activity grouped by week. The days array
   * is a group of commits per day, starting on Sunday.
   * 
   */
  getReposOwnerRepoStatsCommitActivity(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitActivityStats>;

  /**
   * Get contributors list with additions, deletions, and commit counts.
   */
  getReposOwnerRepoStatsContributors(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContributorsStats>;

  /**
   * Get the weekly commit count for the repo owner and everyone else.
   */
  getReposOwnerRepoStatsParticipation(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ParticipationStats>;

  /**
   * Get the number of commits per hour in each day.
   * Each array contains the day number, hour number, and number of commits
   * 0-6 Sunday - Saturday
   * 0-23 Hour of day
   * Number of commits
   * 
   * 
   * For example, [2, 14, 25] indicates that there were 25 total commits, during
   * the 2.00pm hour on Tuesdays. All times are based on the time zone of
   * individual commits.
   * 
   */
  getReposOwnerRepoStatsPunchCard(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CodeFrequencyStats>;

  /**
   * List Statuses for a specific Ref.
   */
  getReposOwnerRepoStatusesRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,  // Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Ref>;

  /**
   * Create a Status.
   */
  postReposOwnerRepoStatusesRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,  // Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HeadBranch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  /**
   * List watchers.
   */
  getReposOwnerRepoSubscribers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
   * Delete a Repository Subscription.
   */
  deleteReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
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
   * Get a Repository Subscription.
   */
  getReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscribition>;

  /**
   * Set a Repository Subscription
   */
  putReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.SubscribitionBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscribition>;

  /**
   * Get list of tags.
   */
  getReposOwnerRepoTags(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tags>;

  /**
   * Get list of teams
   */
  getReposOwnerRepoTeams(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Teams>;

  /**
   * List Stargazers. New implementation.
   */
  getReposOwnerRepoWatchers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
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
   * Get archive link.
   * This method will return a 302 to a URL to download a tarball or zipball
   * archive for a repository. Please make sure your HTTP framework is
   * configured to follow redirects or you will need to use the Location header
   * to make a second GET request.
   * Note: For private repositories, these links are temporary and expire quickly.
   * 
   */
  getReposOwnerRepoArchiveFormatPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      archiveFormat: string,
      path: string,  // Valid Git reference, defaults to 'master'.
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
   * List all public repositories.
   * This provides a dump of every public repository, in the order that they
   * were created.
   * Note: Pagination is powered exclusively by the since parameter. is the
   * Link header to get the URL for the next page of repositories.
   * 
   */
  getRepositories(
    args: {
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repositories>;

  /**
   * Search code.
   */
  getSearchCode(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The search terms. This can be any combination of the supported code search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the file contents, the file path, or both. 'Languages' Searches code based on the language it's written in. 'Forks' Filters repositories based on the number of forks, and/or whether code from forked repositories should be included in the results at all. 'Size' Finds files that match a certain size (in bytes). 'Path' Specifies the path that the resulting file must be at. 'Extension' Matches files with a certain extension. 'Users' or 'Repositories' Limits searches to a specific user or repository. 
      sort?: string,  // (optional) Can only be 'indexed', which indicates how recently a file has been indexed by the GitHub search infrastructure. If not provided, results are sorted by best match. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchCode>;

  /**
   * Find issues by state and keyword. (This method returns up to 100 results per page.)
   */
  getSearchIssues(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The q search term can also contain any combination of the supported issue search qualifiers:
      sort?: string,  // (optional) The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchIssues>;

  /**
   * Search repositories.
   */
  getSearchRepositories(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The search terms. This can be any combination of the supported repository search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these. 'Size' Finds repositories that match a certain size (in kilobytes). 'Forks' Filters repositories based on the number of forks, and/or whether forked repositories should be included in the results at all. 'Created' and 'Last Updated' Filters repositories based on times of creation, or when they were last updated. 'Users or Repositories' Limits searches to a specific user or repository. 'Languages' Searches repositories based on the language they are written in. 'Stars' Searches repositories based on the number of stars. 
      sort?: string,  // (optional) If not provided, results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchRepositories>;

  /**
   * Search users.
   */
  getSearchUsers(
    args: {
      order?: string,  // (optional) The sort field. if sort param is provided. Can be either asc or desc.
      q: string,  // The search terms. This can be any combination of the supported user search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the username, public email, full name, location, or any combination of these. 'Repository count' Filters users based on the number of repositories they have. 'Location' Filter users by the location indicated in their profile. 'Language' Search for users that have repositories that match a certain language. 'Created' Filter users based on when they joined. 'Followers' Filter users based on the number of followers they have. 
      sort?: string,  // (optional) If not provided, results are sorted by best match.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.SearchUsers>;

  /**
   * Delete team.
   * In order to delete a team, the authenticated user must be an owner of the
   * org that the team is associated with.
   * 
   */
  deleteTeamsTeamId(
    args: {
      teamId: number,  // Id of team.
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
   * Get team.
   */
  getTeamsTeamId(
    args: {
      teamId: number,  // Id of team.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Team>;

  /**
   * Edit team.
   * In order to edit a team, the authenticated user must be an owner of the org
   * that the team is associated with.
   * 
   */
  patchTeamsTeamId(
    args: {
      teamId: number,  // Id of team.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EditTeam,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Team>;

  /**
   * List team members.
   * In order to list members in a team, the authenticated user must be a member
   * of the team.
   * 
   */
  getTeamsTeamIdMembers(
    args: {
      teamId: number,  // Id of team.
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
   * The "Remove team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.
   * 
   * 
   * Remove team member.
   * In order to remove a user from a team, the authenticated user must have 'admin'
   * permissions to the team or be an owner of the org that the team is associated
   * with.
   * NOTE This does not delete the user, it just remove them from the team.
   * 
   */
  deleteTeamsTeamIdMembersUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
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
   * The "Get team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.
   * 
   * 
   * Get team member.
   * In order to get if a user is a member of a team, the authenticated user mus
   * be a member of the team.
   * 
   */
  getTeamsTeamIdMembersUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
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
   * The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.
   * 
   * 
   * Add team member.
   * In order to add a user to a team, the authenticated user must have 'admin'
   * permissions to the team or be an owner of the org that the team is associated
   * with.
   * 
   */
  putTeamsTeamIdMembersUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
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
   * Remove team membership.
   * In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.
   * 
   */
  deleteTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
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
   * Get team membership.
   * In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.
   * 
   */
  getTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TeamMembership>;

  /**
   * Add team membership.
   * In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with.
   * 
   * 
   * If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team.
   * 
   * 
   * If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.
   * 
   */
  putTeamsTeamIdMembershipsUsername(
    args: {
      teamId: number,  // Id of team.
      username: string,  // Name of a member.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TeamMembership>;

  /**
   * List team repos
   */
  getTeamsTeamIdRepos(
    args: {
      teamId: number,  // Id of team.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimitLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.TeamRepos>;

  /**
   * In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
   */
  putTeamsTeamIdReposOrgRepo(
    args: {
      teamId: number,  // Id of team.
      org: string,  // Name of a organization.
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
   * In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.
   */
  deleteTeamsTeamIdReposOwnerRepo(
    args: {
      teamId: number,  // Id of team.
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
   * Check if a team manages a repository
   */
  getTeamsTeamIdReposOwnerRepo(
    args: {
      teamId: number,  // Id of team.
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
  ): Observable<any>;

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
  ): Observable<any>;

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

  /**
   * Get all users.
   * This provides a dump of every user, in the order that they signed up for GitHub.
   * Note: Pagination is powered exclusively by the since parameter. Use the Link
   * header to get the URL for the next page of users.
   * 
   */
  getUsers(
    args: {
      since?: number,  // (optional) The integer ID of the last User that you've seen.
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
   * Get a single user.
   */
  getUsersUsername(
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
  ): Observable<models.Users>;

  /**
   * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
   */
  getUsersUsernameEvents(
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
   * This is the user's organization dashboard. You must be authenticated as the user to view this.
   */
  getUsersUsernameEventsOrgsOrg(
    args: {
      username: string,  // Name of user.
      org: string,
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
   * List a user's followers
   */
  getUsersUsernameFollowers(
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
  ): Observable<models.Users>;

  /**
   * Check if one user follows another.
   */
  getUsersUsernameFollowingTargetUser(
    args: {
      username: string,  // Name of user.
      targetUser: string,  // Name of user.
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
   * List a users gists.
   */
  getUsersUsernameGists(
    args: {
      username: string,  // Name of user.
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
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
   * List public keys for a user.
   * Lists the verified public keys for a user. This is accessible by anyone.
   * 
   */
  getUsersUsernameKeys(
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
  ): Observable<models.Gitignore>;

  /**
   * List all public organizations for a user.
   */
  getUsersUsernameOrgs(
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
  ): Observable<models.Gitignore>;

  /**
   * These are events that you'll only see public events.
   */
  getUsersUsernameReceivedEvents(
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
   * List public events that a user has received
   */
  getUsersUsernameReceivedEventsPublic(
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
   * List public repositories for the specified user.
   */
  getUsersUsernameRepos(
    args: {
      username: string,  // Name of user.
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
   * List repositories being starred by a user.
   */
  getUsersUsernameStarred(
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
   * List repositories being watched by a user.
   */
  getUsersUsernameSubscriptions(
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

}
