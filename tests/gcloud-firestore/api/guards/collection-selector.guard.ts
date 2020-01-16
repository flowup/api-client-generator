/* tslint:disable */
import {
  CollectionSelector,
} from '../models';

export function isCollectionSelector(arg: any): arg is CollectionSelector {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // allDescendants?: boolean
    ( typeof arg.allDescendants === 'undefined' || typeof arg.allDescendants === 'boolean' ) &&
  // collectionId?: string
    ( typeof arg.collectionId === 'undefined' || typeof arg.collectionId === 'string' ) &&

    true
  );
}

