/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';import { HttpOptions } from '../../types';

import * as models from '../../models';
export interface SearchAPIClientInterface {
  /**
   * Arguments object for method `getSearchCode`.
   */
  getSearchCodeParams?: {
    /**
     * The sort field. if sort param is provided. Can be either asc or desc.
     * If not set, server will use the default value: desc
     */
    order?: ('desc' | 'asc'),
    /**
     * The search terms. This can be any combination of the supported code
     * search parameters:
     * 'Search In' Qualifies which fields are searched. With this qualifier
     * you can restrict the search to just the file contents, the file path,
     * or both.
     * 'Languages' Searches code based on the language it's written in.
     * 'Forks' Filters repositories based on the number of forks, and/or
     * whether code from forked repositories should be included in the results
     * at all.
     * 'Size' Finds files that match a certain size (in bytes).
     * 'Path' Specifies the path that the resulting file must be at.
     * 'Extension' Matches files with a certain extension.
     * 'Users' or 'Repositories' Limits searches to a specific user or repository.
     * 
     */
    q: string,
    /**
     * Can only be 'indexed', which indicates how recently a file has been indexed
     * by the GitHub search infrastructure. If not provided, results are sorted
     * by best match.
     * 
     */
    sort?: ('indexed'),
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Search code.
   * Response generated for [ 200 ] HTTP response code.
   */
  getSearchCode(
    args: Exclude<SearchAPIClientInterface['getSearchCodeParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.SearchCode>;
  getSearchCode(
    args: Exclude<SearchAPIClientInterface['getSearchCodeParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.SearchCode>>;
  getSearchCode(
    args: Exclude<SearchAPIClientInterface['getSearchCodeParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.SearchCode>>;

  /**
   * Arguments object for method `getSearchIssues`.
   */
  getSearchIssuesParams?: {
    /**
     * The sort field. if sort param is provided. Can be either asc or desc.
     * If not set, server will use the default value: desc
     */
    order?: ('desc' | 'asc'),
    /** The q search term can also contain any combination of the supported issue search qualifiers: */
    q: string,
    /** The sort field. Can be comments, created, or updated. Default: results are sorted by best match. */
    sort?: ('updated' | 'created' | 'comments'),
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Find issues by state and keyword. (This method returns up to 100 results per page.)
   * Response generated for [ 200 ] HTTP response code.
   */
  getSearchIssues(
    args: Exclude<SearchAPIClientInterface['getSearchIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.SearchIssues>;
  getSearchIssues(
    args: Exclude<SearchAPIClientInterface['getSearchIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.SearchIssues>>;
  getSearchIssues(
    args: Exclude<SearchAPIClientInterface['getSearchIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.SearchIssues>>;

  /**
   * Arguments object for method `getSearchRepositories`.
   */
  getSearchRepositoriesParams?: {
    /**
     * The sort field. if sort param is provided. Can be either asc or desc.
     * If not set, server will use the default value: desc
     */
    order?: ('desc' | 'asc'),
    /**
     * The search terms. This can be any combination of the supported repository
     * search parameters:
     * 'Search In' Qualifies which fields are searched. With this qualifier you
     * can restrict the search to just the repository name, description, readme,
     * or any combination of these.
     * 'Size' Finds repositories that match a certain size (in kilobytes).
     * 'Forks' Filters repositories based on the number of forks, and/or whether
     * forked repositories should be included in the results at all.
     * 'Created' and 'Last Updated' Filters repositories based on times of
     * creation, or when they were last updated.
     * 'Users or Repositories' Limits searches to a specific user or repository.
     * 'Languages' Searches repositories based on the language they are written in.
     * 'Stars' Searches repositories based on the number of stars.
     * 
     */
    q: string,
    /** If not provided, results are sorted by best match. */
    sort?: ('stars' | 'forks' | 'updated'),
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Search repositories.
   * Response generated for [ 200 ] HTTP response code.
   */
  getSearchRepositories(
    args: Exclude<SearchAPIClientInterface['getSearchRepositoriesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.SearchRepositories>;
  getSearchRepositories(
    args: Exclude<SearchAPIClientInterface['getSearchRepositoriesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.SearchRepositories>>;
  getSearchRepositories(
    args: Exclude<SearchAPIClientInterface['getSearchRepositoriesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.SearchRepositories>>;

  /**
   * Arguments object for method `getSearchUsers`.
   */
  getSearchUsersParams?: {
    /**
     * The sort field. if sort param is provided. Can be either asc or desc.
     * If not set, server will use the default value: desc
     */
    order?: ('desc' | 'asc'),
    /**
     * The search terms. This can be any combination of the supported user
     * search parameters:
     * 'Search In' Qualifies which fields are searched. With this qualifier you
     * can restrict the search to just the username, public email, full name,
     * location, or any combination of these.
     * 'Repository count' Filters users based on the number of repositories they
     * have.
     * 'Location' Filter users by the location indicated in their profile.
     * 'Language' Search for users that have repositories that match a certain
     * language.
     * 'Created' Filter users based on when they joined.
     * 'Followers' Filter users based on the number of followers they have.
     * 
     */
    q: string,
    /** If not provided, results are sorted by best match. */
    sort?: ('followers' | 'repositories' | 'joined'),
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Search users.
   * Response generated for [ 200 ] HTTP response code.
   */
  getSearchUsers(
    args: Exclude<SearchAPIClientInterface['getSearchUsersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.SearchUsers>;
  getSearchUsers(
    args: Exclude<SearchAPIClientInterface['getSearchUsersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.SearchUsers>>;
  getSearchUsers(
    args: Exclude<SearchAPIClientInterface['getSearchUsersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.SearchUsers>>;

}
