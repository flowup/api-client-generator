/* tslint:disable */
import {
  MapValue,
} from '../models';
import {
  isValue,
} from '.';

export function isMapValue(arg: any): arg is MapValue {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // fields?: { [key: string]: Value }
    ( typeof arg.fields === 'undefined' || isValue(arg.fields) ) &&

    true
  );
}

