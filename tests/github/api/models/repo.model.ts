/* tslint:disable */

export interface Repo {
  clone_url?: string;
  created_at?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  description?: string;
  fork?: boolean;
  forks?: number;
  forks_count?: number;
  full_name?: string;
  git_url?: string;
  has_downloads?: boolean;
  has_issues?: boolean;
  has_wiki?: boolean;
  homepage?: string;
  html_url?: string;
  id?: number;
  language?: string;
  master_branch?: string;
  mirror_url?: string;
  name?: string;
  open_issues?: number;
  open_issues_count?: number;
  organization?: { [key: string]: any };
  owner?: { [key: string]: any };
  parent?: { [key: string]: any };  // Is present when the repo is a fork. Parent is the repo this repo was forked from.
  private?: boolean;
  pushed_at?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  size?: number;
  source?: { [key: string]: any };  // Is present when the repo is a fork. Source is the ultimate source for the network.
  ssh_url?: string;
  svn_url?: string;
  updated_at?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  url?: string;
  watchers?: number;
  watchers_count?: number;
}
