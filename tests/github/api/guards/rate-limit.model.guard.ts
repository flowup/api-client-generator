/* tslint:disable */
import {
  RateLimit,
} from '../models';

export function isRateLimit(arg: any): arg is RateLimit {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // rate?: any
    ( typeof arg.rate === 'undefined' || isany(arg.rate) ) &&

    true
  );
}

