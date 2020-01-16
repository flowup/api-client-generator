/* tslint:disable */
import {
  DocumentsTarget,
} from '../models';

export function isDocumentsTarget(arg: any): arg is DocumentsTarget {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // documents?: string[]
    ( typeof arg.documents === 'undefined' || (Array.isArray(arg.documents) && arg.documents.every(item => typeof item === 'string')) ) &&

    true
  );
}

