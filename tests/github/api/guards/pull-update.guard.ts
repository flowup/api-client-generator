/* tslint:disable */
import {
  PullUpdate,
} from '../models';

export function isPullUpdate(arg: any): arg is PullUpdate {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

