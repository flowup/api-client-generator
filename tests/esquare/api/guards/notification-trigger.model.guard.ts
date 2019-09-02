/* tslint:disable */
import {
  NotificationTrigger,
} from '../models';

export function isNotificationTrigger(arg: any): arg is NotificationTrigger {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

    true
  );
}

