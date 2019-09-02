/* tslint:disable */
import {
  NotificationEditableListItem,
} from '../models';
import {
  isNotificationEditable,
} from '.';

export function isNotificationEditableListItem(arg: any): arg is NotificationEditableListItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // enabled?: boolean
    ( typeof arg.enabled === 'undefined' || typeof arg.enabled === 'boolean' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // extends NotificationEditable
    isNotificationEditable(arg) &&

    true
  );
}

