/* tslint:disable */
  import {
  Right,
  } from '../models';

export function isRight(arg: any): arg is Right {
  return false
   || arg === Right.MEMBER
   || arg === Right.ADMIN
   || arg === Right.VIEW_ALL
   || arg === Right.VIEW_MY
   || arg === Right.VIEW_EDIT
   || arg === Right.READ_WRITE
   || arg === Right.CONTROL
  ;
}
