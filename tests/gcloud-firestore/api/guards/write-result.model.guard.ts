/* tslint:disable */
import {
  WriteResult,
} from '../models';
import {
  isValue,
} from '.';

export function isWriteResult(arg: any): arg is WriteResult {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // transformResults?: Value[]
    ( typeof arg.transformResults === 'undefined' || (Array.isArray(arg.transformResults) && arg.transformResults.every(item => isValue(item))) ) &&
  // updateTime?: string
    ( typeof arg.updateTime === 'undefined' || typeof arg.updateTime === 'string' ) &&

    true
  );
}

