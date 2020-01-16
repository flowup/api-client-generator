/* tslint:disable */
  import {
  Criticality,
  } from '../models';

export function isCriticality(arg: any): arg is Criticality {
  return false
   || arg === Criticality.Low
   || arg === Criticality.Medium
   || arg === Criticality.High
  ;
}
