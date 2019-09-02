/* tslint:disable */
import {
  ReportTemplate,
} from '../models';
import {
  isStatus,
} from '.';

export function isReportTemplate(arg: any): arg is ReportTemplate {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
  // sampleFileUrl?: string
    ( typeof arg.sampleFileUrl === 'undefined' || typeof arg.sampleFileUrl === 'string' ) &&
  // status?: Status
    ( typeof arg.status === 'undefined' || isStatus(arg.status) ) &&
  // subtitle?: string
    ( typeof arg.subtitle === 'undefined' || typeof arg.subtitle === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

