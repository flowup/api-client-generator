/* tslint:disable */
import {
  ListCollectionIdsRequest,
} from '../models';

export function isListCollectionIdsRequest(arg: any): arg is ListCollectionIdsRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // pageSize?: number
    ( typeof arg.pageSize === 'undefined' || typeof arg.pageSize === 'number' ) &&
  // pageToken?: string
    ( typeof arg.pageToken === 'undefined' || typeof arg.pageToken === 'string' ) &&

    true
  );
}

