/* tslint:disable */
import {
  UserListItem,
} from '../models';
import { isUserStatus } from './user-status.guard';

export function isUserListItem(arg: any): arg is UserListItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // entityIds?: number[]
    ( typeof arg.entityIds === 'undefined' || (Array.isArray(arg.entityIds) && arg.entityIds.every(item => typeof item === 'number')) ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // roleId?: number
    ( typeof arg.roleId === 'undefined' || typeof arg.roleId === 'number' ) &&
  // status?: UserStatus
    ( typeof arg.status === 'undefined' || isUserStatus(arg.status) ) &&

    true
  );
}

