/* tslint:disable */
import {
  Structure,
} from '../models';
import {
  isStructureForm,
} from '.';

export function isStructure(arg: any): arg is Structure {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // parentId?: number
    ( typeof arg.parentId === 'undefined' || typeof arg.parentId === 'number' ) &&
  // extends StructureForm
    isStructureForm(arg) &&

    true
  );
}

