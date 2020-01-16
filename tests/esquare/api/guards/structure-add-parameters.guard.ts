/* tslint:disable */
import {
  StructureAddParameters,
} from '../models';
import { isStructureForm } from './structure-form.guard';

export function isStructureAddParameters(arg: any): arg is StructureAddParameters {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // parentId?: number
    ( typeof arg.parentId === 'undefined' || typeof arg.parentId === 'number' ) &&
  // extends StructureForm
    isStructureForm(arg) &&

    true
  );
}

