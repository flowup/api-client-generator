/* tslint:disable */
import {
  HeadBranch,
} from '../models';

export function isHeadBranch(arg: any): arg is HeadBranch {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // object?: { [key: string]: any }
    ( typeof arg.object === 'undefined' || typeof arg.object === '{ [key: string]: any }' ) &&
  // ref?: string
    ( typeof arg.ref === 'undefined' || typeof arg.ref === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

