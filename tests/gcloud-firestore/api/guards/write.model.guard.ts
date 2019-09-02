/* tslint:disable */
import {
  Write,
} from '../models';
import {
  isDocument,
  isDocumentMask,
  isDocumentTransform,
  isPrecondition,
} from '.';

export function isWrite(arg: any): arg is Write {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // currentDocument?: Precondition
    ( typeof arg.currentDocument === 'undefined' || isPrecondition(arg.currentDocument) ) &&
  // delete?: string
    ( typeof arg.delete === 'undefined' || typeof arg.delete === 'string' ) &&
  // transform?: DocumentTransform
    ( typeof arg.transform === 'undefined' || isDocumentTransform(arg.transform) ) &&
  // update?: Document
    ( typeof arg.update === 'undefined' || isDocument(arg.update) ) &&
  // updateMask?: DocumentMask
    ( typeof arg.updateMask === 'undefined' || isDocumentMask(arg.updateMask) ) &&

    true
  );
}

