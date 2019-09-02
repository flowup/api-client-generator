/* tslint:disable */
import {
  ListenRequest,
} from '../models';
import {
  isTarget,
} from '.';

export function isListenRequest(arg: any): arg is ListenRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // addTarget?: Target
    ( typeof arg.addTarget === 'undefined' || isTarget(arg.addTarget) ) &&
  // labels?: { [key: string]: string }
    ( typeof arg.labels === 'undefined' || typeof arg.labels === 'string' ) &&
  // removeTarget?: number
    ( typeof arg.removeTarget === 'undefined' || typeof arg.removeTarget === 'number' ) &&

    true
  );
}

