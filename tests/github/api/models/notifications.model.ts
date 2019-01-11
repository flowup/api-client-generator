/* tslint:disable */

export interface Notifications {
  id?: number;
  last_read_at?: string;
  reason?: string;
  repository?: { [key: string]: any };
  subject?: { [key: string]: any };
  unread?: boolean;
  updated_at?: string;
  url?: string;
}
