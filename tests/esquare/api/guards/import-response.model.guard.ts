/* tslint:disable */
import {
  ImportResponse,
} from '../models';

export function isImportResponse(arg: any): arg is ImportResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // skipperRows?: number
    ( typeof arg.skipperRows === 'undefined' || typeof arg.skipperRows === 'number' ) &&
  // status?: boolean
    ( typeof arg.status === 'undefined' || typeof arg.status === 'boolean' ) &&

    true
  );
}

