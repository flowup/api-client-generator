/* tslint:disable */
import {
  ImportStatusDetailsItem,
} from '../models';
import {
  isStatus,
} from '.';

export function isImportStatusDetailsItem(arg: any): arg is ImportStatusDetailsItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
  // progress?: number
    ( typeof arg.progress === 'undefined' || typeof arg.progress === 'number' ) &&
  // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
  // subtitle?: string
    ( typeof arg.subtitle === 'undefined' || typeof arg.subtitle === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

