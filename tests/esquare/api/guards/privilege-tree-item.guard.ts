/* tslint:disable */
import {
  PrivilegeTreeItem,
} from '../models';

export function isPrivilegeTreeItem(arg: any): arg is PrivilegeTreeItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // parentId?: number
    ( typeof arg.parentId === 'undefined' || typeof arg.parentId === 'number' ) &&

    true
  );
}

