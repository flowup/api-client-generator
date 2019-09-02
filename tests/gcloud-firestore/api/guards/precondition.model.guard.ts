/* tslint:disable */
import {
  Precondition,
} from '../models';

export function isPrecondition(arg: any): arg is Precondition {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // exists?: boolean
    ( typeof arg.exists === 'undefined' || typeof arg.exists === 'boolean' ) &&
  // updateTime?: string
    ( typeof arg.updateTime === 'undefined' || typeof arg.updateTime === 'string' ) &&

    true
  );
}

