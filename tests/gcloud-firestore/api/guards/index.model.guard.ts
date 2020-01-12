/* tslint:disable */
import {
  Index,
} from '../models';
import {
  isIndexField,
} from '.';

export function isIndex(arg: any): arg is Index {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // collectionId?: string
    ( typeof arg.collectionId === 'undefined' || typeof arg.collectionId === 'string' ) &&
  // fields?: IndexField[]
    ( typeof arg.fields === 'undefined' || (Array.isArray(arg.fields) && arg.fields.every(item => isIndexField(item))) ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | 'ERROR'
    ( typeof arg.state === 'undefined' || ['STATE_UNSPECIFIED', 'CREATING', 'READY', 'ERROR'].includes(arg.state) ) &&

    true
  );
}

