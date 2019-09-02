/* tslint:disable */
import {
  Keys,
} from '../models';

export function isKeys(arg: any): arg is Keys {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

