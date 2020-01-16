/* tslint:disable */
import {
  DeleteFile,
} from '../models';

export function isDeleteFile(arg: any): arg is DeleteFile {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
  // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&

    true
  );
}

