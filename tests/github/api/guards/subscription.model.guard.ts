/* tslint:disable */
import {
  Subscription,
} from '../models';

export function isSubscription(arg: any): arg is Subscription {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
  // reason?: boolean
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'boolean' ) &&
  // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&
  // thread_url?: string
    ( typeof arg.thread_url === 'undefined' || typeof arg.thread_url === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

