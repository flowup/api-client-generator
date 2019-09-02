/* tslint:disable */
import {
  Pulls,
} from '../models';

export function isPulls(arg: any): arg is Pulls {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

