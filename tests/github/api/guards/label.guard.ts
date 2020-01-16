/* tslint:disable */
import {
  Label,
} from '../models';

export function isLabel(arg: any): arg is Label {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // color?: string
    ( typeof arg.color === 'undefined' || typeof arg.color === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

