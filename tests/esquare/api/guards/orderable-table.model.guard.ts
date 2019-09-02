/* tslint:disable */
import {
  OrderableTable,
} from '../models';
import {
  isOrder,
  isTable,
} from '.';

export function isOrderableTable(arg: any): arg is OrderableTable {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // order?: Order
    ( typeof arg.order === 'undefined' || isOrder(arg.order) ) &&
  // orderBy?: number
    ( typeof arg.orderBy === 'undefined' || typeof arg.orderBy === 'number' ) &&
  // extends Table
    isTable(arg) &&

    true
  );
}

