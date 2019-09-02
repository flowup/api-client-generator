/* tslint:disable */
import {
  UnaryFilter,
} from '../models';
import {
  isFieldReference,
} from '.';

export function isUnaryFilter(arg: any): arg is UnaryFilter {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&
  // op?: string
    ( typeof arg.op === 'undefined' || typeof arg.op === 'string' ) &&

    true
  );
}

