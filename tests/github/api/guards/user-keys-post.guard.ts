/* tslint:disable */
import {
  UserKeysPost,
} from '../models';

export function isUserKeysPost(arg: any): arg is UserKeysPost {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // key?: string
    ( typeof arg.key === 'undefined' || typeof arg.key === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

