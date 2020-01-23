/* tslint:disable */

export interface CompareCommits {
  ahead_by?: number;
  base_commit?: object;
  behind_by?: number;
  commits?: object[];
  diff_url?: string;
  files?: object[];
  html_url?: string;
  patch_url?: string;
  permalink_url?: string;
  status?: string;
  total_commits?: number;
  url?: string;
}
