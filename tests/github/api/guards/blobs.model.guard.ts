/* tslint:disable */
import {
  Blobs,
} from '../models';

export function isBlobs(arg: any): arg is Blobs {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

    true
  );
}

