/* tslint:disable */
import {
  RunQueryRequest,
} from '../models';
import {
  isStructuredQuery,
  isTransactionOptions,
} from '.';

export function isRunQueryRequest(arg: any): arg is RunQueryRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // newTransaction?: TransactionOptions
    ( typeof arg.newTransaction === 'undefined' || isTransactionOptions(arg.newTransaction) ) &&
  // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
  // structuredQuery?: StructuredQuery
    ( typeof arg.structuredQuery === 'undefined' || isStructuredQuery(arg.structuredQuery) ) &&
  // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

    true
  );
}

