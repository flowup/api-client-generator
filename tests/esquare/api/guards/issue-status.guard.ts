/* tslint:disable */
  import {
  IssueStatus,
  } from '../models';

export function isIssueStatus(arg: any): arg is IssueStatus {
  return false
   || arg === IssueStatus.Pending
   || arg === IssueStatus.Resolved
  ;
}
