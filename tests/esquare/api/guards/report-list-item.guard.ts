/* tslint:disable */
import {
  ReportListItem,
} from '../models';
import { isCriticality } from './criticality.guard';
import { isStatus } from './status.guard';

export function isReportListItem(arg: any): arg is ReportListItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // criticality?: Criticality
    ( typeof arg.criticality === 'undefined' || isCriticality(arg.criticality) ) &&
  // deadline?: string
    ( typeof arg.deadline === 'undefined' || typeof arg.deadline === 'string' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
  // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
  // subtitle?: string
    ( typeof arg.subtitle === 'undefined' || typeof arg.subtitle === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

