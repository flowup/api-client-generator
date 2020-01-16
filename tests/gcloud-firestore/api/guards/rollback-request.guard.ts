/* tslint:disable */
import {
  RollbackRequest,
} from '../models';

export function isRollbackRequest(arg: any): arg is RollbackRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&

    true
  );
}

