/* tslint:disable */

export interface CompareCommits {
  ahead_by?: number;
  base_commit?: { [key: string]: any };
  behind_by?: number;
  commits?: { [key: string]: any }[];
  diff_url?: string;
  files?: { [key: string]: any }[];
  html_url?: string;
  patch_url?: string;
  permalink_url?: string;
  status?: string;
  total_commits?: number;
  url?: string;
}
