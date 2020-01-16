/* tslint:disable */
  import {
  UserStatus,
  } from '../models';

export function isUserStatus(arg: any): arg is UserStatus {
  return false
   || arg === UserStatus.Active
   || arg === UserStatus.Blocked
  ;
}
