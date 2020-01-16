/* tslint:disable */
import {
  Event,
} from '../models';

export function isEvent(arg: any): arg is Event {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // actor?: { [key: string]: any }
    ( typeof arg.actor === 'undefined' || typeof arg.actor === 'object' ) &&
  // commit_id?: string
    ( typeof arg.commit_id === 'undefined' || typeof arg.commit_id === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // event?: string
    ( typeof arg.event === 'undefined' || typeof arg.event === 'string' ) &&
  // issue?: { [key: string]: any }
    ( typeof arg.issue === 'undefined' || typeof arg.issue === 'object' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

