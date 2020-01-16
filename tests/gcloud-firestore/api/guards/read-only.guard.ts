/* tslint:disable */
import {
  ReadOnly,
} from '../models';

export function isReadOnly(arg: any): arg is ReadOnly {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&

    true
  );
}

