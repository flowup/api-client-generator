/* tslint:disable */
import {
  CommentBody,
} from '../models';

export function isCommentBody(arg: any): arg is CommentBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body: string
    ( typeof arg.body === 'string' ) &&

    true
  );
}

