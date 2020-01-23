/* tslint:disable */

export interface RepoCommit {
  author?: object;
  committer?: object;
  message?: string;
  parents?: object[];
  sha?: string;
  tree?: object;
  url?: string;
}
