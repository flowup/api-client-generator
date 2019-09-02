/* tslint:disable */
import {
  ReportItem,
} from '../models';
import {
  isReportListItem,
  isReportTemplateGroup,
} from '.';

export function isReportItem(arg: any): arg is ReportItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // groups?: ReportTemplateGroup[]
    ( typeof arg.groups === 'undefined' || (Array.isArray(arg.groups) && arg.groups.every(item => isReportTemplateGroup(item))) ) &&
  // progress?: number
    ( typeof arg.progress === 'undefined' || typeof arg.progress === 'number' ) &&
  // extends ReportListItem
    isReportListItem(arg) &&

    true
  );
}

