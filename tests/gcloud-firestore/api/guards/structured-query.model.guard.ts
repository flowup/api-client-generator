/* tslint:disable */
import {
  StructuredQuery,
} from '../models';
import {
  isCollectionSelector,
  isCursor,
  isFilter,
  isOrder,
  isProjection,
} from '.';

export function isStructuredQuery(arg: any): arg is StructuredQuery {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // endAt?: Cursor
    ( typeof arg.endAt === 'undefined' || isCursor(arg.endAt) ) &&
  // from?: CollectionSelector[]
    ( typeof arg.from === 'undefined' || (Array.isArray(arg.from) && arg.from.every(item => isCollectionSelector(item))) ) &&
  // limit?: number
    ( typeof arg.limit === 'undefined' || typeof arg.limit === 'number' ) &&
  // offset?: number
    ( typeof arg.offset === 'undefined' || typeof arg.offset === 'number' ) &&
  // orderBy?: Order[]
    ( typeof arg.orderBy === 'undefined' || (Array.isArray(arg.orderBy) && arg.orderBy.every(item => isOrder(item))) ) &&
  // select?: Projection
    ( typeof arg.select === 'undefined' || isProjection(arg.select) ) &&
  // startAt?: Cursor
    ( typeof arg.startAt === 'undefined' || isCursor(arg.startAt) ) &&
  // where?: Filter
    ( typeof arg.where === 'undefined' || isFilter(arg.where) ) &&

    true
  );
}

