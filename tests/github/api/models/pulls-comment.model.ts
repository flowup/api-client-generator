/* tslint:disable */

export interface PullsComment {
  _links?: object;
  body?: string;
  commit_id?: string;
  created_at?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  id?: number;
  path?: string;
  position?: number;
  updated_at?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  url?: string;
  user?: object;
}
