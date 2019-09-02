/* tslint:disable */
import {
  CompositeFilter,
} from '../models';
import {
  isFilter,
} from '.';

export function isCompositeFilter(arg: any): arg is CompositeFilter {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // filters?: Filter[]
    ( typeof arg.filters === 'undefined' || (Array.isArray(arg.filters) && arg.filters.every(item => isFilter(item))) ) &&
  // op?: string
    ( typeof arg.op === 'undefined' || typeof arg.op === 'string' ) &&

    true
  );
}

