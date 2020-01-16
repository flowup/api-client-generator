/* tslint:disable */
import {
  DeleteFileBody,
} from '../models';

export function isDeleteFileBody(arg: any): arg is DeleteFileBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === 'object' ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

    true
  );
}

