/* tslint:disable */
import {
  ReadWrite,
} from '../models';

export function isReadWrite(arg: any): arg is ReadWrite {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // retryTransaction?: string
    ( typeof arg.retryTransaction === 'undefined' || typeof arg.retryTransaction === 'string' ) &&

    true
  );
}

