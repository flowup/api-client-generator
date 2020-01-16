/* tslint:disable */
import {
  Model,
} from '../models';

export function isModel(arg: any): arg is Model {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // created?: number
    ( typeof arg.created === 'undefined' || typeof arg.created === 'number' ) &&
  // deleted?: number
    ( typeof arg.deleted === 'undefined' || typeof arg.deleted === 'number' ) &&
  // id?: string
    ( typeof arg.id === 'undefined' || typeof arg.id === 'string' ) &&
  // recursivePointer?: Model
    ( typeof arg.recursivePointer === 'undefined' || isModel(arg.recursivePointer) ) &&
  // updated?: number
    ( typeof arg.updated === 'undefined' || typeof arg.updated === 'number' ) &&

    true
  );
}

