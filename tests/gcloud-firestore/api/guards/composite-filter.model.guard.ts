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
  // op?: 'OPERATOR_UNSPECIFIED' | 'AND'
    ( typeof arg.op === 'undefined' || ['OPERATOR_UNSPECIFIED', 'AND'].includes(arg.op) ) &&

    true
  );
}

