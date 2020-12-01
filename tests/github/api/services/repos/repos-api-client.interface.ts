/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface ReposAPIClientInterface {

  /**
   * Delete a Repository.
   * Deleting a repository requires admin access. If OAuth is used, the delete_repo
   * scope is required.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo>;

  /**
   * Edit repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepo(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoAssignees(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 204 ] HTTP response code.
   */
  getReposOwnerRepoAssigneesAssignee(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      assignee: string,  // Login of the assignee.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get list of branches
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoBranches(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Branches>;

  /**
   * Get Branch
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoBranchesBranch(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      branch: string,  // Name of the branch.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoCollaborators(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users>;

  /**
   * Remove collaborator.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      user: string,  // Login of the user.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Check if user is a collaborator
   * Response generated for [ 204 ] HTTP response code.
   */
  getReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      user: string,  // Login of the user.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Add collaborator.
   * Response generated for [ 204 ] HTTP response code.
   */
  putReposOwnerRepoCollaboratorsUser(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      user: string,  // Login of the user.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * List commit comments for a repository.
   * Comments are ordered by ascending ID.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoComments>;

  /**
   * Delete a commit comment
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single commit comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments>;

  /**
   * Update a commit comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoCommentsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments>;

  /**
   * List commits on a repository.
   * Response generated for [ 200 ] HTTP response code.
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
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoCommitsRefStatus(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RefStatus>;

  /**
   * Get a single commit.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoCommitsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commit>;

  /**
   * List comments for a single commitList comments for a single commit.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoComments>;

  /**
   * Create a commit comment.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoCommitsShaCodeComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code of the commit.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommitBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitComments>;

  /**
   * Compare two commits
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoCompareBaseIdHeadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      baseId: string,
      headId: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  deleteReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
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
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContentsPath>;

  /**
   * Create a file.
   * Response generated for [ 200 ] HTTP response code.
   */
  putReposOwnerRepoContentsPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      path: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CreateFileBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CreateFile>;

  /**
   * Get list of contributors.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoContributors(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      anon: string,  // Set to 1 or true to include anonymous contributors in results.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Contributors>;

  /**
   * Users with pull access can view deployments for a repository
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoDeployments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoDeployments>;

  /**
   * Users with push access can create a deployment for a given ref
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoDeployments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Deployment,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DeploymentResp>;

  /**
   * Users with pull access can view deployment statuses for a deployment
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoDeploymentsIdStatuses(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: number,  // The Deployment ID to list the statuses from.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoDeploymentsIdStatuses(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: number,  // The Deployment ID to list the statuses from.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.DeploymentStatusesCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Deprecated. List downloads for a repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoDownloads(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Downloads>;

  /**
   * Deprecated. Delete a download.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoDownloadsDownloadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      downloadId: number,  // Id of download.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Deprecated. Get a single download.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoDownloadsDownloadId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      downloadId: number,  // Id of download.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Downloads>;

  /**
   * Get list of repository events.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * List forks.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoForks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      sort?: ('newes' | 'oldes' | 'watchers'),
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoForks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ForkBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Fork>;

  /**
   * Create a Blob.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoGitBlobs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Blob,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Blobs>;

  /**
   * Get a Blob.
   * Since blobs can be any arbitrary binary data, the input and responses for
   * the blob API takes an encoding parameter that can be either utf-8 or
   * base64. If your data cannot be losslessly sent as a UTF-8 string, you can
   * base64 encode it.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitBlobsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Blob>;

  /**
   * Create a Commit.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoGitCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RepoCommitBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.GitCommit>;

  /**
   * Get a Commit.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitCommitsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.RepoCommit>;

  /**
   * Get all References
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitRefs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Refs>;

  /**
   * Create a Reference
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoGitRefs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.RefsBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.HeadBranch>;

  /**
   * Delete a Reference
   * Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a 
   * Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a Reference
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.HeadBranch>;

  /**
   * Update a Reference
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoGitRefsRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoGitTags(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tag,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tags>;

  /**
   * Get a Tag.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitTagsShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoGitTrees(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Tree,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Trees>;

  /**
   * Get a Tree.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitTreesShaCode(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // Tree SHA.
      recursive?: number,  // (optional) Get a Tree Recursively. (0 or 1)
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tree>;

  /**
   * Get list of hooks.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoHooks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook>;

  /**
   * Create a hook.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoHooks(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HookBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook>;

  /**
   * Delete a hook.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get single hook.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Hook>;

  /**
   * Edit a hook.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoHooksHookId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 204 ] HTTP response code.
   */
  postReposOwnerRepoHooksHookIdTests(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      hookId: number,  // Id of hook.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * List issues for a repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssues(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      filter: ('assigned' | 'created' | 'mentioned' | 'subscribed' | 'all'),  // Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see 
      state: ('open' | 'closed'),
      labels: string,  // String list of comma separated Label names. Example - bug,ui,@high.
      sort: ('created' | 'updated' | 'comments'),
      direction: ('asc' | 'desc'),
      since?: string,  // (optional) Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoIssues(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issue>;

  /**
   * List comments in a repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: ('created' | 'updated'),
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments>;

  /**
   * Delete a comment.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoIssuesCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment>;

  /**
   * Edit a comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoIssuesCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // ID of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment>;

  /**
   * List issue events for a repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * Get a single event.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesEventId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      eventId: number,  // Id of the event.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Event>;

  /**
   * Get a single issue
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoIssuesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.Issue,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Issue>;

  /**
   * List comments on an issue.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments>;

  /**
   * Create a comment.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoIssuesNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComment>;

  /**
   * List events for an issue.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesNumberEvents(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events>;

  /**
   * Remove all labels from an issue.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * List labels on an issue.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels>;

  /**
   * Add labels to an issue.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label>;

  /**
   * Replace all labels for an issue.
   * Sending an empty array ([]) will remove all Labels from the Issue.
   * 
   * Response generated for [ 201 ] HTTP response code.
   */
  putReposOwnerRepoIssuesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label>;

  /**
   * Remove a label from an issue.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoIssuesNumberLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of issue.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get list of keys.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoKeys(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Keys>;

  /**
   * Create a key.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoKeys(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.UserKeysPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId>;

  /**
   * Delete a key.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoKeysKeyId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      keyId: number,  // Id of key.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a key
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoKeysKeyId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      keyId: number,  // Id of key.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.UserKeysKeyId>;

  /**
   * List all labels for this repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Labels>;

  /**
   * Create a label.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.EmailsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label>;

  /**
   * Delete a label.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single label.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Label>;

  /**
   * Update a label.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoLabelsName(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      name: string,  // Name of the label.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoLanguages(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Languages>;

  /**
   * Perform a merge.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoMerges(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MergesBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.MergesSuccessful>;

  /**
   * List milestones for a repository.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoMilestones(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      state?: ('open' | 'closed'),  // (optional) String to filter by state.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: ('due_date' | 'completeness'),
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone>;

  /**
   * Create a milestone.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoMilestones(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone>;

  /**
   * Delete a milestone.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single milestone.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone>;

  /**
   * Update a milestone.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoMilestonesNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.MilestoneUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Milestone>;

  /**
   * Get labels for every issue in a milestone.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoMilestonesNumberLabels(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Number of milestone.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
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
      xRateLimit?: number,
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
   * Response generated for [ 205 ] HTTP response code.
   */
  putReposOwnerRepoNotifications(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.NotificationMarkRead,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * List pull requests.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoPulls(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      state?: ('open' | 'closed'),  // (optional) String to filter by state.
      head?: string,  // (optional) Filter pulls by head user and branch name in the format of 'user:ref-name'. Example: github:new-script-format. 
      base?: string,  // (optional) Filter pulls by base branch name. Example - gh-pages.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls>;

  /**
   * Create a pull request.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoPulls(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls>;

  /**
   * List comments in a repository.
   * By default, Review Comments are ordered by ascending ID.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoPullsComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      direction?: string,  // (optional) Ignored without 'sort' parameter.
      sort?: ('created' | 'updated'),
      since?: string,  // (optional) The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: "2012-10-09T23:39:01Z". 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IssuesComments>;

  /**
   * Delete a comment.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoPullsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoPullsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment>;

  /**
   * Edit a comment.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoPullsCommentId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      commentId: number,  // Id of comment.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.CommentBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment>;

  /**
   * Get a single pull request.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoPullsNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullRequest>;

  /**
   * Update a pull request.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoPullsNumber(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullUpdate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Repo>;

  /**
   * List comments on a pull request.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoPullsNumberComments(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.PullsCommentPost,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PullsComment>;

  /**
   * List commits on a pull request.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoPullsNumberCommits(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Commits>;

  /**
   * List pull requests files.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoPullsNumberFiles(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pulls>;

  /**
   * Get if a pull request has been merged.
   * Response generated for [ 204 ] HTTP response code.
   */
  getReposOwnerRepoPullsNumberMerge(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Merge a pull request (Merge Button's)
   * Response generated for [ 200 ] HTTP response code.
   */
  putReposOwnerRepoPullsNumberMerge(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      number: number,  // Id of pull.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoReadme(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref?: string,  // (optional) The String name of the Commit/Branch/Tag. Defaults to master.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContentsPath>;

  /**
   * Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoReleases(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoReleases(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release>;

  /**
   * Delete a release asset
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single release asset
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoReleasesAssetsId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.AssetPatch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Asset>;

  /**
   * Users with push access to the repository can delete a release.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a single release
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release>;

  /**
   * Users with push access to the repository can edit a release
   * Response generated for [ 200 ] HTTP response code.
   */
  patchReposOwnerRepoReleasesId(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.ReleaseCreate,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Release>;

  /**
   * List assets for a release
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoReleasesIdAssets(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      id: string,
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Assets>;

  /**
   * List Stargazers.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoStargazers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoStatsCodeFrequency(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoStatsCommitActivity(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitActivityStats>;

  /**
   * Get contributors list with additions, deletions, and commit counts.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoStatsContributors(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ContributorsStats>;

  /**
   * Get the weekly commit count for the repo owner and everyone else.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoStatsParticipation(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoStatsPunchCard(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.CodeFrequencyStats>;

  /**
   * List Statuses for a specific Ref.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoStatusesRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,  // Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Ref>;

  /**
   * Create a Status.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoStatusesRef(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      ref: string,  // Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. 
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.HeadBranch,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Ref>;

  /**
   * List watchers.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoSubscribers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Users>;

  /**
   * Delete a Repository Subscription.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Get a Repository Subscription.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscribition>;

  /**
   * Set a Repository Subscription
   * Response generated for [ 200 ] HTTP response code.
   */
  putReposOwnerRepoSubscription(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
      body: models.SubscribitionBody,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Subscribition>;

  /**
   * Get list of tags.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoTags(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Tags>;

  /**
   * Get list of teams
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoTeams(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Teams>;

  /**
   * List Stargazers. New implementation.
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoWatchers(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
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
   * Response generated for [ missing ] HTTP response code.
   */
  getReposOwnerRepoArchiveFormatPath(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      archiveFormat: ('tarball' | 'zipball'),
      path: string,  // Valid Git reference, defaults to 'master'.
      xGitHubMediaType?: string,  // (optional) You can check the current version of media type in responses. 
      accept?: string,  // (optional) Is used to set specified media type.
      xRateLimit?: number,
      xRateLimitRemaining?: number,
      xRateLimitReset?: number,
      xGitHubRequestId?: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

}
