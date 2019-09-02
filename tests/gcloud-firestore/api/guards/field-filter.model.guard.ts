/* tslint:disable */
import {
  FieldFilter,
} from '../models';
import {
  isFieldReference,
  isValue,
} from '.';

export function isFieldFilter(arg: any): arg is FieldFilter {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&
  // op?: string
    ( typeof arg.op === 'undefined' || typeof arg.op === 'string' ) &&
  // value?: Value
    ( typeof arg.value === 'undefined' || isValue(arg.value) ) &&

    true
  );
}

