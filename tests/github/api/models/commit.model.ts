/* tslint:disable */

export interface Commit {
  author?: object;
  commit?: object;
  committer?: object;
  files?: object[];
  parents?: object[];
  sha?: string;
  stats?: object;
  url?: string;
}
