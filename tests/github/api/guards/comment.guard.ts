/* tslint:disable */
import {
  Comment,
} from '../models';

export function isComment(arg: any): arg is Comment {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&

    true
  );
}

