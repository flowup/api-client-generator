/* tslint:disable */
  import {
  Status,
  } from '../models';

export function isStatus(arg: any): arg is Status {
  return false
   || arg === Status.Pending
   || arg === Status.InProgress
   || arg === Status.Complete
  ;
}
