/* tslint:disable */
import {
  ListIndexesResponse,
} from '../models';
import { isIndex } from './index.guard';

export function isListIndexesResponse(arg: any): arg is ListIndexesResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // indexes?: Index[]
    ( typeof arg.indexes === 'undefined' || (Array.isArray(arg.indexes) && arg.indexes.every(item => isIndex(item))) ) &&
  // nextPageToken?: string
    ( typeof arg.nextPageToken === 'undefined' || typeof arg.nextPageToken === 'string' ) &&

    true
  );
}

