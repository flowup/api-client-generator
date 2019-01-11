/* tslint:disable */

export interface GitCommit {
  author?: { [key: string]: any };
  message?: string;
  parents?: string;
  tree?: string;
}
