/* tslint:disable */
import {
  RoleUpdateDetails,
} from '../models';
import { isRoleStatus } from './role-status.guard';

export function isRoleUpdateDetails(arg: any): arg is RoleUpdateDetails {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // privilegesToAssing?: number[]
    ( typeof arg.privilegesToAssing === 'undefined' || (Array.isArray(arg.privilegesToAssing) && arg.privilegesToAssing.every(item => typeof item === 'number')) ) &&
  // privilegesToUnassing?: number[]
    ( typeof arg.privilegesToUnassing === 'undefined' || (Array.isArray(arg.privilegesToUnassing) && arg.privilegesToUnassing.every(item => typeof item === 'number')) ) &&
  // status?: RoleStatus
    ( typeof arg.status === 'undefined' || isRoleStatus(arg.status) ) &&
  // usersToAssing?: number[]
    ( typeof arg.usersToAssing === 'undefined' || (Array.isArray(arg.usersToAssing) && arg.usersToAssing.every(item => typeof item === 'number')) ) &&
  // usersToUnassing?: number[]
    ( typeof arg.usersToUnassing === 'undefined' || (Array.isArray(arg.usersToUnassing) && arg.usersToUnassing.every(item => typeof item === 'number')) ) &&

    true
  );
}

