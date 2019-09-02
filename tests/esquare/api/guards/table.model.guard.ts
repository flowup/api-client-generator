/* tslint:disable */
import {
  Table,
} from '../models';
import {
  isColumn,
  isTableCell,
} from '.';

export function isTable(arg: any): arg is Table {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // tableData?: TableCell[][]
    ( typeof arg.tableData === 'undefined' || (Array.isArray(arg.tableData) && arg.tableData.every(item => isTableCell[](item))) ) &&
  // tableHead?: Column[]
    ( typeof arg.tableHead === 'undefined' || (Array.isArray(arg.tableHead) && arg.tableHead.every(item => isColumn(item))) ) &&

    true
  );
}

