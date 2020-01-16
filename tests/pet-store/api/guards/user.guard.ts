/* tslint:disable */
import {
  User,
} from '../models';

export function isUser(arg: any): arg is User {
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
  // password?: string
    ( typeof arg.password === 'undefined' || typeof arg.password === 'string' ) &&
  // phone?: string
    ( typeof arg.phone === 'undefined' || typeof arg.phone === 'string' ) &&
  // username?: string
    ( typeof arg.username === 'undefined' || typeof arg.username === 'string' ) &&
  // userStatus?: number
    ( typeof arg.userStatus === 'undefined' || typeof arg.userStatus === 'number' ) &&

    true
  );
}

