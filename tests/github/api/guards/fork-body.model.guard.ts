/* tslint:disable */
import {
  ForkBody,
} from '../models';

export function isForkBody(arg: any): arg is ForkBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // organization?: string
    ( typeof arg.organization === 'undefined' || typeof arg.organization === 'string' ) &&

    true
  );
}

