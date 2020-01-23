/* tslint:disable */

export interface RepoCommitBody {
  author?: object;
  message: string;
  parents: string[];
  tree: string;
}
