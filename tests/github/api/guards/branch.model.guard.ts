/* tslint:disable */
import {
  Branch,
} from '../models';

export function isBranch(arg: any): arg is Branch {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === '{ [key: string]: any }' ) &&
  // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === '{ [key: string]: any }' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

    true
  );
}

