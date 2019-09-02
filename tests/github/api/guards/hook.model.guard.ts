/* tslint:disable */
import {
  Hook,
} from '../models';

export function isHook(arg: any): arg is Hook {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

