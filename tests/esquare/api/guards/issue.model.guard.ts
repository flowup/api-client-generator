/* tslint:disable */
import {
  Issue,
} from '../models';
import {
  isIssueAlertType,
} from '.';

export function isIssue(arg: any): arg is Issue {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // alert?: IssueAlertType
    ( typeof arg.alert === 'undefined' || isIssueAlertType(arg.alert) ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // dueDate?: string
    ( typeof arg.dueDate === 'undefined' || typeof arg.dueDate === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // reportName?: string
    ( typeof arg.reportName === 'undefined' || typeof arg.reportName === 'string' ) &&
  // rootCause?: string
    ( typeof arg.rootCause === 'undefined' || typeof arg.rootCause === 'string' ) &&
  // school?: string
    ( typeof arg.school === 'undefined' || typeof arg.school === 'string' ) &&

    true
  );
}

