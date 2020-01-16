/* tslint:disable */
import {
  Filter,
} from '../models';
import { isCompositeFilter } from './composite-filter.guard';
import { isFieldFilter } from './field-filter.guard';
import { isUnaryFilter } from './unary-filter.guard';

export function isFilter(arg: any): arg is Filter {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // compositeFilter?: CompositeFilter
    ( typeof arg.compositeFilter === 'undefined' || isCompositeFilter(arg.compositeFilter) ) &&
  // fieldFilter?: FieldFilter
    ( typeof arg.fieldFilter === 'undefined' || isFieldFilter(arg.fieldFilter) ) &&
  // unaryFilter?: UnaryFilter
    ( typeof arg.unaryFilter === 'undefined' || isUnaryFilter(arg.unaryFilter) ) &&

    true
  );
}

