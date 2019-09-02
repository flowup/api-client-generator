/* tslint:disable */
import {
  Branches,
} from '../models';

export function isBranches(arg: any): arg is Branches {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

