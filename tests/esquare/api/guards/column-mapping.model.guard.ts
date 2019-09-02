/* tslint:disable */
import {
  ColumnMapping,
} from '../models';

export function isColumnMapping(arg: any): arg is ColumnMapping {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // reportColumnId?: number
    ( typeof arg.reportColumnId === 'undefined' || typeof arg.reportColumnId === 'number' ) &&
  // templateColumnId?: number
    ( typeof arg.templateColumnId === 'undefined' || typeof arg.templateColumnId === 'number' ) &&

    true
  );
}

