/* tslint:disable */
import {
  BeginTransactionRequest,
} from '../models';
import {
  isTransactionOptions,
} from '.';

export function isBeginTransactionRequest(arg: any): arg is BeginTransactionRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // options?: TransactionOptions
    ( typeof arg.options === 'undefined' || isTransactionOptions(arg.options) ) &&

    true
  );
}

