/* tslint:disable */
  import {
  ImportStatus,
  } from '../models';

export function isImportStatus(arg: any): arg is ImportStatus {
  return false
   || arg === ImportStatus.Live
   || arg === ImportStatus.PastDeadline
  ;
}
