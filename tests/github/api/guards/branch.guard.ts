/* tslint:disable */
import {
  Branch,
} from '../models';

export function isBranch(arg: any): arg is Branch {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === 'object' ) &&
  // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

    true
  );
}

