/* tslint:disable */

export interface Gist {
  comments?: number;
  comments_url?: string;
  created_at?: string;  // Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  description?: string;
  files?: { [key: string]: any };
  forks?: { [key: string]: any }[];
  git_pull_url?: string;
  git_push_url?: string;
  history?: { [key: string]: any }[];
  html_url?: string;
  id?: string;
  public?: boolean;
  url?: string;
  user?: { [key: string]: any };
}
