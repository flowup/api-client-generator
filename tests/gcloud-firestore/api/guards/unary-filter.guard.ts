/* tslint:disable */
import {
  UnaryFilter,
} from '../models';
import { isFieldReference } from './field-reference.guard';

export function isUnaryFilter(arg: any): arg is UnaryFilter {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&
  // op?: 'OPERATOR_UNSPECIFIED' | 'IS_NAN' | 'IS_NULL'
    ( typeof arg.op === 'undefined' || ['OPERATOR_UNSPECIFIED', 'IS_NAN', 'IS_NULL'].includes(arg.op) ) &&

    true
  );
}

