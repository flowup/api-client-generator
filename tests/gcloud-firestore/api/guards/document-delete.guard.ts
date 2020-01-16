/* tslint:disable */
import {
  DocumentDelete,
} from '../models';

export function isDocumentDelete(arg: any): arg is DocumentDelete {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // document?: string
    ( typeof arg.document === 'undefined' || typeof arg.document === 'string' ) &&
  // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
  // removedTargetIds?: number[]
    ( typeof arg.removedTargetIds === 'undefined' || (Array.isArray(arg.removedTargetIds) && arg.removedTargetIds.every(item => typeof item === 'number')) ) &&

    true
  );
}

