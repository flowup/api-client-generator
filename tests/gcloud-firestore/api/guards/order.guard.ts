/* tslint:disable */
import {
  Order,
} from '../models';
import { isFieldReference } from './field-reference.guard';

export function isOrder(arg: any): arg is Order {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // direction?: 'DIRECTION_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING'
    ( typeof arg.direction === 'undefined' || ['DIRECTION_UNSPECIFIED', 'ASCENDING', 'DESCENDING'].includes(arg.direction) ) &&
  // field?: FieldReference
    ( typeof arg.field === 'undefined' || isFieldReference(arg.field) ) &&

    true
  );
}

