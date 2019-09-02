/* tslint:disable */
import {
  FieldReference,
} from '../models';

export function isFieldReference(arg: any): arg is FieldReference {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // fieldPath?: string
    ( typeof arg.fieldPath === 'undefined' || typeof arg.fieldPath === 'string' ) &&

    true
  );
}

