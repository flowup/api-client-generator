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
  // op?: 'OPERATOR_UNSPECIFIED' | 'LESS_THAN' | 'LESS_THAN_OR_EQUAL' | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUAL' | 'EQUAL'
    ( typeof arg.op === 'undefined' || ['OPERATOR_UNSPECIFIED', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'EQUAL'].includes(arg.op) ) &&
  // value?: Value
    ( typeof arg.value === 'undefined' || isValue(arg.value) ) &&

    true
  );
}

