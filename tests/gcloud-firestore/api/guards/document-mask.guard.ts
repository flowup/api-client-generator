/* tslint:disable */
import {
  DocumentMask,
} from '../models';

export function isDocumentMask(arg: any): arg is DocumentMask {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // fieldPaths?: string[]
    ( typeof arg.fieldPaths === 'undefined' || (Array.isArray(arg.fieldPaths) && arg.fieldPaths.every(item => typeof item === 'string')) ) &&

    true
  );
}

