/* tslint:disable */
import {
  ExistenceFilter,
} from '../models';

export function isExistenceFilter(arg: any): arg is ExistenceFilter {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // count?: number
    ( typeof arg.count === 'undefined' || typeof arg.count === 'number' ) &&
  // targetId?: number
    ( typeof arg.targetId === 'undefined' || typeof arg.targetId === 'number' ) &&

    true
  );
}

