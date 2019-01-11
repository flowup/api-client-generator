/* tslint:disable */
import {
  Column,
  ValidatedTableCell,
} from '.';

export interface ValidatedTable {
  tableData?: ValidatedTableCell[][];
  tableHead?: Column[];
}
