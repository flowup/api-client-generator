/* tslint:disable */
import {
  MilestoneUpdate,
} from '../models';

export function isMilestoneUpdate(arg: any): arg is MilestoneUpdate {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // due_on?: string
    ( typeof arg.due_on === 'undefined' || typeof arg.due_on === 'string' ) &&
  // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

