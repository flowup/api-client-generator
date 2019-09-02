/* tslint:disable */
import {
  Refs,
} from '../models';

export function isRefs(arg: any): arg is Refs {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

