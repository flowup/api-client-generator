/* tslint:disable */

export interface Commit {
  author?: { [key: string]: any };
  commit?: { [key: string]: any };
  committer?: { [key: string]: any };
  files?: { [key: string]: any }[];
  parents?: { [key: string]: any }[];
  sha?: string;
  stats?: { [key: string]: any };
  url?: string;
}
