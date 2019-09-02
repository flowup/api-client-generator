/* tslint:disable */
import {
  PullsPost,
} from '../models';

export function isPullsPost(arg: any): arg is PullsPost {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // base?: string
    ( typeof arg.base === 'undefined' || typeof arg.base === 'string' ) &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // head?: string
    ( typeof arg.head === 'undefined' || typeof arg.head === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

