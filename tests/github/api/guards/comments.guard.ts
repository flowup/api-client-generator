/* tslint:disable */
import {
  Comments,
} from '../models';

export function isComments(arg: any): arg is Comments {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

