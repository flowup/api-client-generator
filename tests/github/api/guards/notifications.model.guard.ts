/* tslint:disable */
import {
  Notifications,
} from '../models';

export function isNotifications(arg: any): arg is Notifications {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // last_read_at?: string
    ( typeof arg.last_read_at === 'undefined' || typeof arg.last_read_at === 'string' ) &&
  // reason?: string
    ( typeof arg.reason === 'undefined' || typeof arg.reason === 'string' ) &&
  // repository?: { [key: string]: any }
    ( typeof arg.repository === 'undefined' || typeof arg.repository === '{ [key: string]: any }' ) &&
  // subject?: { [key: string]: any }
    ( typeof arg.subject === 'undefined' || typeof arg.subject === '{ [key: string]: any }' ) &&
  // unread?: boolean
    ( typeof arg.unread === 'undefined' || typeof arg.unread === 'boolean' ) &&
  // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

