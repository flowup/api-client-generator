/* tslint:disable */

export interface Event {
  actor: { [key: string]: any };
  commit_id: string;
  created_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  event: string;
  issue: { [key: string]: any };
  url: string;
}
