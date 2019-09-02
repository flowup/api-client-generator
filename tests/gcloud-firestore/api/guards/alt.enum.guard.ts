/* tslint:disable */
  import {
  Alt,
  } from '../models';

export function isAlt(arg: any): arg is Alt {
  return false
   || arg === Alt.json
   || arg === Alt.media
   || arg === Alt.proto
  ;
}
