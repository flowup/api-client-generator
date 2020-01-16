/* tslint:disable */
import {
  DummySelectorSettings,
} from '../models';

export function isDummySelectorSettings(arg: any): arg is DummySelectorSettings {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // DummyObjId?: number
    ( typeof arg.DummyObjId === 'undefined' || typeof arg.DummyObjId === 'number' ) &&
  // OrganizerTaskElementId?: number
    ( typeof arg.OrganizerTaskElementId === 'undefined' || typeof arg.OrganizerTaskElementId === 'number' ) &&

    true
  );
}

