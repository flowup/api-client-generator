/* tslint:disable */
import {
  BeginTransactionResponse,
} from '../models';

export function isBeginTransactionResponse(arg: any): arg is BeginTransactionResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

    true
  );
}

