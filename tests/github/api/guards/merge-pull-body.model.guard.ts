/* tslint:disable */
import {
  MergePullBody,
} from '../models';

export function isMergePullBody(arg: any): arg is MergePullBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // commit_message?: string
    ( typeof arg.commit_message === 'undefined' || typeof arg.commit_message === 'string' ) &&

    true
  );
}

