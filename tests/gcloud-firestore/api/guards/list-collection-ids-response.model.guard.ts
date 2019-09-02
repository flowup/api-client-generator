/* tslint:disable */
import {
  ListCollectionIdsResponse,
} from '../models';

export function isListCollectionIdsResponse(arg: any): arg is ListCollectionIdsResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // collectionIds?: string[]
    ( typeof arg.collectionIds === 'undefined' || (Array.isArray(arg.collectionIds) && arg.collectionIds.every(item => typeof item === 'string')) ) &&
  // nextPageToken?: string
    ( typeof arg.nextPageToken === 'undefined' || typeof arg.nextPageToken === 'string' ) &&

    true
  );
}

