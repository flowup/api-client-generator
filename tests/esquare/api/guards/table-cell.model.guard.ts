/* tslint:disable */
import {
  TableCell,
} from '../models';

export function isTableCell(arg: any): arg is TableCell {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // columnId?: number
    ( typeof arg.columnId === 'undefined' || typeof arg.columnId === 'number' ) &&
  // value?: string
    ( typeof arg.value === 'undefined' || typeof arg.value === 'string' ) &&

    true
  );
}

