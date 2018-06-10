/* tslint:disable */

export interface CommitComments {
  body: string;
  commit_id: string;
  created_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  html_url: string;
  id: number;
  line: number;
  path: string;
  position: number;
  updated_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  url: string;
  user: any;
}
