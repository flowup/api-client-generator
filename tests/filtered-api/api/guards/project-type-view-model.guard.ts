/* tslint:disable */
import {
  ProjectTypeViewModel,
} from '../models';

export function isProjectTypeViewModel(arg: any): arg is ProjectTypeViewModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // Category?: string
    ( typeof arg.Category === 'undefined' || typeof arg.Category === 'string' ) &&
  // TypeId?: number
    ( typeof arg.TypeId === 'undefined' || typeof arg.TypeId === 'number' ) &&

    true
  );
}

