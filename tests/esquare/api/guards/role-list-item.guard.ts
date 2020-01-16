/* tslint:disable */
import {
  RoleListItem,
} from '../models';
import { isRoleStatus } from './role-status.guard';

export function isRoleListItem(arg: any): arg is RoleListItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // privileges?: string
    ( typeof arg.privileges === 'undefined' || typeof arg.privileges === 'string' ) &&
  // status?: RoleStatus
    ( typeof arg.status === 'undefined' || isRoleStatus(arg.status) ) &&

    true
  );
}

