/* tslint:disable */
import {
  UserKeysKeyId,
} from '../models';

export function isUserKeysKeyId(arg: any): arg is UserKeysKeyId {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // key?: string
    ( typeof arg.key === 'undefined' || typeof arg.key === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

