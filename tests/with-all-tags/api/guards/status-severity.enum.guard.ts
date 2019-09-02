/* tslint:disable */
  import {
  StatusSeverity,
  } from '../models';

export function isStatusSeverity(arg: any): arg is StatusSeverity {
  return false
   || arg === StatusSeverity.Unknown
   || arg === StatusSeverity.OK
   || arg === StatusSeverity.Warning
   || arg === StatusSeverity.Error
   || arg === StatusSeverity.Critical
  ;
}
