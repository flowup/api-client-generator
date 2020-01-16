/* tslint:disable */
import {
  ImportHistoryItem,
} from '../models';
import { isImportType } from './import-type.guard';
import { isStatus } from './status.guard';

export function isImportHistoryItem(arg: any): arg is ImportHistoryItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // datetime?: string
    ( typeof arg.datetime === 'undefined' || typeof arg.datetime === 'string' ) &&
  // details?: string
    ( typeof arg.details === 'undefined' || typeof arg.details === 'string' ) &&
  // filename?: string
    ( typeof arg.filename === 'undefined' || typeof arg.filename === 'string' ) &&
  // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
  // type?: ImportType
    ( typeof arg.type === 'undefined' || isImportType(arg.type) ) &&
  // user?: string
    ( typeof arg.user === 'undefined' || typeof arg.user === 'string' ) &&

    true
  );
}

