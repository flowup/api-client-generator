/* tslint:disable */
import {
  Order,
} from '../models';
import {
  isFieldReference,
} from '.';

export function isOrder(arg: any): arg is Order {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // direction?: string
    ( typeof arg.direction === 'undefined' || typeof arg.direction === 'string' ) &&
  // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&

    true
  );
}

