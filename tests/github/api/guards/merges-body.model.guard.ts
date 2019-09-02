/* tslint:disable */
import {
  MergesBody,
} from '../models';

export function isMergesBody(arg: any): arg is MergesBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // base?: string
    ( typeof arg.base === 'undefined' || typeof arg.base === 'string' ) &&
  // commit_message?: string
    ( typeof arg.commit_message === 'undefined' || typeof arg.commit_message === 'string' ) &&
  // head?: string
    ( typeof arg.head === 'undefined' || typeof arg.head === 'string' ) &&

    true
  );
}

