/* tslint:disable */
import {
  RateLimit,
} from '../models';
import { isany } from './build-in.guards';

export function isRateLimit(arg: any): arg is RateLimit {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // rate?: any
    ( typeof arg.rate === 'undefined' || isany(arg.rate) ) &&

    true
  );
}

