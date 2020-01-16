/* tslint:disable */
import {
  NotificationMarkRead,
} from '../models';

export function isNotificationMarkRead(arg: any): arg is NotificationMarkRead {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // last_read_at?: string
    ( typeof arg.last_read_at === 'undefined' || typeof arg.last_read_at === 'string' ) &&

    true
  );
}

