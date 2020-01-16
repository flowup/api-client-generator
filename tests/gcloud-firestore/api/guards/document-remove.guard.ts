/* tslint:disable */
import {
  DocumentRemove,
} from '../models';

export function isDocumentRemove(arg: any): arg is DocumentRemove {
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

