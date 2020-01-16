/* tslint:disable */
import {
  PutSubscription,
} from '../models';

export function isPutSubscription(arg: any): arg is PutSubscription {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
  // reason?: { [key: string]: any }
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'object' ) &&
  // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&
  // thread_url?: string
    ( typeof arg.thread_url === 'undefined' || typeof arg.thread_url === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

