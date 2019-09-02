/* tslint:disable */
import {
  Mouse,
} from '../models';
import {
  isPet,
} from '.';

export function isMouse(arg: any): arg is Mouse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // color?: string
    ( typeof arg.color === 'undefined' || typeof arg.color === 'string' ) &&
  // extends Pet
    isPet(arg) &&

    true
  );
}

