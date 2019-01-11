/* tslint:disable */

export interface MergesSuccessful {
  author: { [key: string]: any };
  comments_url: string;
  commit: { [key: string]: any };
  committer: { [key: string]: any };
  merged: boolean;
  message: string;
  parents: { [key: string]: any }[];
  sha: string;
  url: string;
}
