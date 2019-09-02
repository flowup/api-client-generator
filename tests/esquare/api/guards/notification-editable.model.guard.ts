/* tslint:disable */
import {
  NotificationEditable,
} from '../models';
import {
  isCriticality,
  isFrequency,
} from '.';

export function isNotificationEditable(arg: any): arg is NotificationEditable {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // frequency?: Frequency
    ( typeof arg.frequency === 'undefined' || isFrequency(arg.frequency) ) &&
  // moduleId?: number
    ( typeof arg.moduleId === 'undefined' || typeof arg.moduleId === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // priority?: Criticality
    ( typeof arg.priority === 'undefined' || isCriticality(arg.priority) ) &&
  // triggerId?: number
    ( typeof arg.triggerId === 'undefined' || typeof arg.triggerId === 'number' ) &&

    true
  );
}

