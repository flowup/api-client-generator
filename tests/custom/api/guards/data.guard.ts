/* tslint:disable */
import {
  Data,
} from '../models';

export function isData(arg: any): arg is Data {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
  // firstName?: string
    ( typeof arg.firstName === 'undefined' || typeof arg.firstName === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // lastName?: string
    ( typeof arg.lastName === 'undefined' || typeof arg.lastName === 'string' ) &&
  // phone?: string
    ( typeof arg.phone === 'undefined' || typeof arg.phone === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

