/* tslint:disable */

export interface PullRequest {
  _links: { [key: string]: any };
  additions: number;
  base: { [key: string]: any };
  body: string;
  changed_files: number;
  closed_at: string;
  comments: number;
  commits: number;
  created_at: string;
  deletions: number;
  diff_url: string;
  head: { [key: string]: any };
  html_url: string;
  issue_url: string;
  merge_commit_sha: string;
  mergeable: boolean;
  merged: boolean;
  merged_at: string;
  merged_by: { [key: string]: any };
  number: number;
  patch_url: string;
  state: string;
  title: string;
  updated_at: string;
  url: string;
  user: { [key: string]: any };
}
