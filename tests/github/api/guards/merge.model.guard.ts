/* tslint:disable */
import {
  Merge,
} from '../models';

export function isMerge(arg: any): arg is Merge {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // merged?: boolean
    ( typeof arg.merged === 'undefined' || typeof arg.merged === 'boolean' ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

    true
  );
}

