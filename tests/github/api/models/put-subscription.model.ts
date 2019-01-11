/* tslint:disable */

export interface PutSubscription {
  created_at: string;
  ignored: boolean;
  reason: { [key: string]: any };
  subscribed: boolean;
  thread_url: string;
  url: string;
}
