/* tslint:disable */
  import {
  Possition,
  } from '../models';

export function isPossition(arg: any): arg is Possition {
  return false
   || arg === Possition.First
   || arg === Possition.Second
   || arg === Possition.Third
  ;
}
