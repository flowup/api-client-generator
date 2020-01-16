/* tslint:disable */
import {
  Empty,
} from '../models';

export function isEmpty(arg: any): arg is Empty {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

