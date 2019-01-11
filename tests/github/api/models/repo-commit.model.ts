/* tslint:disable */

export interface RepoCommit {
  author: { [key: string]: any };
  committer: { [key: string]: any };
  message: string;
  parents: { [key: string]: any }[];
  sha: string;
  tree: { [key: string]: any };
  url: string;
}
