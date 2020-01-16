/* tslint:disable */
import {
  TransactionOptions,
} from '../models';
import { isReadOnly } from './read-only.guard';
import { isReadWrite } from './read-write.guard';

export function isTransactionOptions(arg: any): arg is TransactionOptions {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // readOnly?: ReadOnly
    ( typeof arg.readOnly === 'undefined' || isReadOnly(arg.readOnly) ) &&
  // readWrite?: ReadWrite
    ( typeof arg.readWrite === 'undefined' || isReadWrite(arg.readWrite) ) &&

    true
  );
}

