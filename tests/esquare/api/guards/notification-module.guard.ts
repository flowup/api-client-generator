/* tslint:disable */
import {
  NotificationModule,
} from '../models';

export function isNotificationModule(arg: any): arg is NotificationModule {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // notificationsCount?: number
    ( typeof arg.notificationsCount === 'undefined' || typeof arg.notificationsCount === 'number' ) &&

    true
  );
}

