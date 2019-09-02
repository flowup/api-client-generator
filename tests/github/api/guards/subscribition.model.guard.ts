/* tslint:disable */
import {
  Subscribition,
} from '../models';

export function isSubscribition(arg: any): arg is Subscribition {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
  // reason?: string
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'string' ) &&
  // repository_url?: string
    ( typeof arg.repository_url === 'undefined' || typeof arg.repository_url === 'string' ) &&
  // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

