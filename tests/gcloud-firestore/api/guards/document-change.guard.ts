/* tslint:disable */
import {
  DocumentChange,
} from '../models';
import { isDocument } from './document.guard';

export function isDocumentChange(arg: any): arg is DocumentChange {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // document?: Document
    ( typeof arg.document === 'undefined' || isDocument(arg.document) ) &&
  // removedTargetIds?: number[]
    ( typeof arg.removedTargetIds === 'undefined' || (Array.isArray(arg.removedTargetIds) && arg.removedTargetIds.every(item => typeof item === 'number')) ) &&
  // targetIds?: number[]
    ( typeof arg.targetIds === 'undefined' || (Array.isArray(arg.targetIds) && arg.targetIds.every(item => typeof item === 'number')) ) &&

    true
  );
}

