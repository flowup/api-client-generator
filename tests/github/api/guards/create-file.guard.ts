/* tslint:disable */
import {
  CreateFile,
} from '../models';

export function isCreateFile(arg: any): arg is CreateFile {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
  // content?: { [key: string]: any }
    ( typeof arg.content === 'undefined' || typeof arg.content === 'object' ) &&

    true
  );
}

