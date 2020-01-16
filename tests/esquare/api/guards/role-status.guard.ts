/* tslint:disable */
import {
  RoleStatus,
} from '../models';
import { isUserStatus } from './user-status.guard';

export function isRoleStatus(arg: any): arg is RoleStatus {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // extends UserStatus
    isUserStatus(arg) &&

    true
  );
}

