/* tslint:disable */
import {
  Ref,
} from '../models';

export function isRef(arg: any): arg is Ref {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

