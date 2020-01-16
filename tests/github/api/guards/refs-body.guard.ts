/* tslint:disable */
import {
  RefsBody,
} from '../models';

export function isRefsBody(arg: any): arg is RefsBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // ref?: string
    ( typeof arg.ref === 'undefined' || typeof arg.ref === 'string' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

    true
  );
}

