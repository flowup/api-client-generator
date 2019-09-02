/* tslint:disable */
import {
  BatchGetDocumentsRequest,
} from '../models';
import {
  isDocumentMask,
  isTransactionOptions,
} from '.';

export function isBatchGetDocumentsRequest(arg: any): arg is BatchGetDocumentsRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // documents?: string[]
    ( typeof arg.documents === 'undefined' || (Array.isArray(arg.documents) && arg.documents.every(item => typeof item === 'string')) ) &&
  // mask?: DocumentMask
    ( typeof arg.mask === 'undefined' || isDocumentMask(arg.mask) ) &&
  // newTransaction?: TransactionOptions
    ( typeof arg.newTransaction === 'undefined' || isTransactionOptions(arg.newTransaction) ) &&
  // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
  // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

    true
  );
}

