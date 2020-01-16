/* tslint:disable */
import {
  PullsCommentPost,
} from '../models';

export function isPullsCommentPost(arg: any): arg is PullsCommentPost {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // commit_id?: string
    ( typeof arg.commit_id === 'undefined' || typeof arg.commit_id === 'string' ) &&
  // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
  // position?: number
    ( typeof arg.position === 'undefined' || typeof arg.position === 'number' ) &&

    true
  );
}

