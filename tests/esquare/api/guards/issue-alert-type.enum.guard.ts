/* tslint:disable */
  import {
  IssueAlertType,
  } from '../models';

export function isIssueAlertType(arg: any): arg is IssueAlertType {
  return false
   || arg === IssueAlertType.Validation
   || arg === IssueAlertType.Data
  ;
}
