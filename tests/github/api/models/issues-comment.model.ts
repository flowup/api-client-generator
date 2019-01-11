/* tslint:disable */

export interface IssuesComment {
  body: string;
  created_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  html_url: string;
  id: number;
  updated_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  url: string;
  user: { [key: string]: any };
}
