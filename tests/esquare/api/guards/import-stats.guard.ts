/* tslint:disable */
import {
  ImportStats,
} from '../models';

export function isImportStats(arg: any): arg is ImportStats {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // late?: number
    ( typeof arg.late === 'undefined' || typeof arg.late === 'number' ) &&
  // onTime?: number
    ( typeof arg.onTime === 'undefined' || typeof arg.onTime === 'number' ) &&

    true
  );
}

