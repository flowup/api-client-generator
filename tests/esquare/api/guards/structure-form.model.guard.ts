/* tslint:disable */
import {
  StructureForm,
} from '../models';

export function isStructureForm(arg: any): arg is StructureForm {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // address?: string
    ( typeof arg.address === 'undefined' || typeof arg.address === 'string' ) &&
  // code: string
    ( typeof arg.code === 'string' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // name: string
    ( typeof arg.name === 'string' ) &&

    true
  );
}

