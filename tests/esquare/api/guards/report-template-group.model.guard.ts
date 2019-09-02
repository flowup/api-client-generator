/* tslint:disable */
import {
  ReportTemplateGroup,
} from '../models';
import {
  isReportTemplate,
} from '.';

export function isReportTemplateGroup(arg: any): arg is ReportTemplateGroup {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // imports?: ReportTemplate[]
    ( typeof arg.imports === 'undefined' || (Array.isArray(arg.imports) && arg.imports.every(item => isReportTemplate(item))) ) &&
  // issues?: number
    ( typeof arg.issues === 'undefined' || typeof arg.issues === 'number' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

