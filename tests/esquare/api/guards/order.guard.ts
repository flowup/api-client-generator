/* tslint:disable */
  import {
  Order,
  } from '../models';

export function isOrder(arg: any): arg is Order {
  return false
   || arg === Order.asc
   || arg === Order.desc
  ;
}
