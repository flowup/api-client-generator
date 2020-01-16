/* tslint:disable */
import {
  PagedTable,
} from '../models';
import { isTable } from './table.guard';

export function isPagedTable(arg: any): arg is PagedTable {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // totalRows?: number
    ( typeof arg.totalRows === 'undefined' || typeof arg.totalRows === 'number' ) &&
  // extends Table
    isTable(arg) &&

    true
  );
}

