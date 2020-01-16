/* tslint:disable */
import {
  ArrayValue,
} from '../models';
import { isValue } from './value.guard';

export function isArrayValue(arg: any): arg is ArrayValue {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // values?: Value[]
    ( typeof arg.values === 'undefined' || (Array.isArray(arg.values) && arg.values.every(item => isValue(item))) ) &&

    true
  );
}

