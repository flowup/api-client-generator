/* tslint:disable */
import {
  Cursor,
} from '../models';
import { isValue } from './value.guard';

export function isCursor(arg: any): arg is Cursor {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // before?: boolean
    ( typeof arg.before === 'undefined' || typeof arg.before === 'boolean' ) &&
  // values?: Value[]
    ( typeof arg.values === 'undefined' || (Array.isArray(arg.values) && arg.values.every(item => isValue(item))) ) &&

    true
  );
}

