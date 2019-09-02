/* tslint:disable */
import {
  IndexField,
} from '../models';

export function isIndexField(arg: any): arg is IndexField {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // fieldPath?: string
    ( typeof arg.fieldPath === 'undefined' || typeof arg.fieldPath === 'string' ) &&
  // mode?: string
    ( typeof arg.mode === 'undefined' || typeof arg.mode === 'string' ) &&

    true
  );
}

