/* tslint:disable */
import {
  UserDetails,
} from '../models';
import { isUserStatus } from './user-status.guard';

export function isUserDetails(arg: any): arg is UserDetails {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
  // entities?: number[]
    ( typeof arg.entities === 'undefined' || (Array.isArray(arg.entities) && arg.entities.every(item => typeof item === 'number')) ) &&
  // firstName?: string
    ( typeof arg.firstName === 'undefined' || typeof arg.firstName === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // imageData?: string
    ( typeof arg.imageData === 'undefined' || typeof arg.imageData === 'string' ) &&
  // imageUrl?: string
    ( typeof arg.imageUrl === 'undefined' || typeof arg.imageUrl === 'string' ) &&
  // lastName?: string
    ( typeof arg.lastName === 'undefined' || typeof arg.lastName === 'string' ) &&
  // login?: string
    ( typeof arg.login === 'undefined' || typeof arg.login === 'string' ) &&
  // phone?: string
    ( typeof arg.phone === 'undefined' || typeof arg.phone === 'string' ) &&
  // roleId?: number
    ( typeof arg.roleId === 'undefined' || typeof arg.roleId === 'number' ) &&
  // status?: UserStatus
    ( typeof arg.status === 'undefined' || isUserStatus(arg.status) ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

