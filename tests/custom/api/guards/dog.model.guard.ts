/* tslint:disable */
import {
  Dog,
} from '../models';
import {
  isPet,
} from '.';

export function isDog(arg: any): arg is Dog {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // bark?: boolean
    ( typeof arg.bark === 'undefined' || typeof arg.bark === 'boolean' ) &&
  // breed?: string
    ( typeof arg.breed === 'undefined' || typeof arg.breed === 'string' ) &&
  // extends Pet
    isPet(arg) &&

    true
  );
}

