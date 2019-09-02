/* tslint:disable */
import {
  ValidatedTable,
} from '../models';
import {
  isColumn,
  isValidatedTableCell,
} from '.';

export function isValidatedTable(arg: any): arg is ValidatedTable {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // tableData?: ValidatedTableCell[][]
    ( typeof arg.tableData === 'undefined' || (Array.isArray(arg.tableData) && arg.tableData.every(item => isValidatedTableCell[](item))) ) &&
  // tableHead?: Column[]
    ( typeof arg.tableHead === 'undefined' || (Array.isArray(arg.tableHead) && arg.tableHead.every(item => isColumn(item))) ) &&

    true
  );
}

