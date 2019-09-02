/* tslint:disable */
import {
  RoleDetailsItem,
} from '../models';
import {
  isRoleStatus,
} from '.';

export function isRoleDetailsItem(arg: any): arg is RoleDetailsItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // privileges?: number[]
    ( typeof arg.privileges === 'undefined' || (Array.isArray(arg.privileges) && arg.privileges.every(item => typeof item === 'number')) ) &&
  // status?: RoleStatus
    ( typeof arg.status === 'undefined' || isRoleStatus(arg.status) ) &&
  // users?: number[]
    ( typeof arg.users === 'undefined' || (Array.isArray(arg.users) && arg.users.every(item => typeof item === 'number')) ) &&

    true
  );
}

