/* tslint:disable */

export interface Milestone {
  closed_issues?: number;
  created_at?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  creator?: object;
  description?: string;
  due_on?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  number?: number;
  open_issues?: number;
  state?: ('open' | 'closed');
  title?: string;
  url?: string;
}
