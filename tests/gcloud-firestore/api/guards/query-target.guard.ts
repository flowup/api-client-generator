/* tslint:disable */
import {
  QueryTarget,
} from '../models';
import { isStructuredQuery } from './structured-query.guard';

export function isQueryTarget(arg: any): arg is QueryTarget {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // parent?: string
    ( typeof arg.parent === 'undefined' || typeof arg.parent === 'string' ) &&
  // structuredQuery?: StructuredQuery
    ( typeof arg.structuredQuery === 'undefined' || isStructuredQuery(arg.structuredQuery) ) &&

    true
  );
}

