/* tslint:disable */
import {
  ImportStatusItem,
} from '../models';
import { isCriticality } from './criticality.guard';
import { isImportStatusDetailsItem } from './import-status-details-item.guard';

export function isImportStatusItem(arg: any): arg is ImportStatusItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // criticality?: Criticality
    ( typeof arg.criticality === 'undefined' || isCriticality(arg.criticality) ) &&
  // details?: ImportStatusDetailsItem[]
    ( typeof arg.details === 'undefined' || (Array.isArray(arg.details) && arg.details.every(item => isImportStatusDetailsItem(item))) ) &&
  // dueDate?: string
    ( typeof arg.dueDate === 'undefined' || typeof arg.dueDate === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
  // progress?: number
    ( typeof arg.progress === 'undefined' || typeof arg.progress === 'number' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

