/* tslint:disable */
import {
  Customer,
} from '../models';
import {
  isModel,
  isRight,
} from '.';

export function isCustomer(arg: any): arg is Customer {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // address?: string
    ( typeof arg.address === 'undefined' || typeof arg.address === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // right?: Right
    ( typeof arg.right === 'undefined' || isRight(arg.right) ) &&
  // extends Model
    isModel(arg) &&

    true
  );
}

