/* tslint:disable */

export interface RepoCommitBody {
  author?: { [key: string]: any };
  message: string;
  parents: string[];
  tree: string;
}
