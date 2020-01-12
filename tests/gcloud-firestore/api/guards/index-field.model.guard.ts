/* tslint:disable */
import {
  IndexField,
} from '../models';

export function isIndexField(arg: any): arg is IndexField {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // fieldPath?: string
    ( typeof arg.fieldPath === 'undefined' || typeof arg.fieldPath === 'string' ) &&
  // mode?: 'MODE_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING'
    ( typeof arg.mode === 'undefined' || ['MODE_UNSPECIFIED', 'ASCENDING', 'DESCENDING'].includes(arg.mode) ) &&

    true
  );
}

