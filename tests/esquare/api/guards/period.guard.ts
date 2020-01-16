/* tslint:disable */
  import {
  Period,
  } from '../models';

export function isPeriod(arg: any): arg is Period {
  return false
   || arg === Period.Year
   || arg === Period.Month
   || arg === Period.Week
  ;
}
