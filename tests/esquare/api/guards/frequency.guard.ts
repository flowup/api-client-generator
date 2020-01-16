/* tslint:disable */
  import {
  Frequency,
  } from '../models';

export function isFrequency(arg: any): arg is Frequency {
  return false
   || arg === Frequency.Daily
   || arg === Frequency.Weekly
   || arg === Frequency.Yearly
  ;
}
