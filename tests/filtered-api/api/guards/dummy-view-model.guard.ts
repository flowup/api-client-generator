/* tslint:disable */
import {
  DummyViewModel,
} from '../models';

export function isDummyViewModel(arg: any): arg is DummyViewModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // DummyNrTitel?: string
    ( typeof arg.DummyNrTitel === 'undefined' || typeof arg.DummyNrTitel === 'string' ) &&
  // DummyObjId?: number
    ( typeof arg.DummyObjId === 'undefined' || typeof arg.DummyObjId === 'number' ) &&
  // UniqueId?: string
    ( typeof arg.UniqueId === 'undefined' || typeof arg.UniqueId === 'string' ) &&

    true
  );
}

