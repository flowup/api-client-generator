/* tslint:disable */
import {
  Operation,
} from '../models';
import {
  isStatus,
} from '.';

export function isOperation(arg: any): arg is Operation {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // done?: boolean
    ( typeof arg.done === 'undefined' || typeof arg.done === 'boolean' ) &&
  // error?: Status
    ( typeof arg.error === 'undefined' || isStatus(arg.error) ) &&
  // metadata?: { [key: string]: any }
    ( typeof arg.metadata === 'undefined' || isany(arg.metadata) ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // response?: { [key: string]: any }
    ( typeof arg.response === 'undefined' || isany(arg.response) ) &&

    true
  );
}

