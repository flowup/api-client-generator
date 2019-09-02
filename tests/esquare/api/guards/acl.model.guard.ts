/* tslint:disable */
import {
  Acl,
} from '../models';

export function isAcl(arg: any): arg is Acl {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // parrentId?: number
    ( typeof arg.parrentId === 'undefined' || typeof arg.parrentId === 'number' ) &&

    true
  );
}

