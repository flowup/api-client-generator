/* tslint:disable */

export interface Fork {
  clone_url: string;
  created_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  description: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  full_name: string;
  git_url: string;
  homepage: string;
  html_url: string;
  id: number;
  language: string;
  master_branch: string;
  mirror_url: string;
  name: string;
  open_issues: number;
  open_issues_count: number;
  owner: { [key: string]: any };
  private: boolean;
  pushed_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  size: number;
  ssh_url: string;
  svn_url: string;
  updated_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  url: string;
  watchers: number;
  watchers_count: number;
}
