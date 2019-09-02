/* tslint:disable */
import {
  NotificationListItem,
} from '../models';
import {
  isCriticality,
} from '.';

export function isNotificationListItem(arg: any): arg is NotificationListItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // date?: string
    ( typeof arg.date === 'undefined' || typeof arg.date === 'string' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // priority?: Criticality
    ( typeof arg.priority === 'undefined' || isCriticality(arg.priority) ) &&

    true
  );
}

