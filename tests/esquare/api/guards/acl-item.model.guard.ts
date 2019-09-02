/* tslint:disable */
import {
  AclItem,
} from '../models';

export function isAclItem(arg: any): arg is AclItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // permissions?: string[]
    ( typeof arg.permissions === 'undefined' || (Array.isArray(arg.permissions) && arg.permissions.every(item => typeof item === 'string')) ) &&
  // role?: string
    ( typeof arg.role === 'undefined' || typeof arg.role === 'string' ) &&

    true
  );
}

