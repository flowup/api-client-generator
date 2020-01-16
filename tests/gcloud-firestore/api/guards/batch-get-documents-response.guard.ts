/* tslint:disable */
import {
  BatchGetDocumentsResponse,
} from '../models';
import { isDocument } from './document.guard';

export function isBatchGetDocumentsResponse(arg: any): arg is BatchGetDocumentsResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // found?: Document
    ( typeof arg.found === 'undefined' || isDocument(arg.found) ) &&
  // missing?: string
    ( typeof arg.missing === 'undefined' || typeof arg.missing === 'string' ) &&
  // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
  // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

    true
  );
}

