/* tslint:disable */
import {
  ValidatedTableCell,
} from '../models';
import {
  isTableCell,
} from '.';

export function isValidatedTableCell(arg: any): arg is ValidatedTableCell {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // error?: string
    ( typeof arg.error === 'undefined' || typeof arg.error === 'string' ) &&
  // extends TableCell
    isTableCell(arg) &&

    true
  );
}

