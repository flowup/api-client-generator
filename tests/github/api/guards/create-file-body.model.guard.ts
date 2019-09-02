/* tslint:disable */
import {
  CreateFileBody,
} from '../models';

export function isCreateFileBody(arg: any): arg is CreateFileBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === '{ [key: string]: any }' ) &&
  // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&

    true
  );
}

