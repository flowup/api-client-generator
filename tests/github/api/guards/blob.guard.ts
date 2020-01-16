/* tslint:disable */
import {
  Blob,
} from '../models';

export function isBlob(arg: any): arg is Blob {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // content?: string
    ( typeof arg.content === 'undefined' || typeof arg.content === 'string' ) &&
  // encoding?: 'utf-8' | 'base64'
    ( typeof arg.encoding === 'undefined' || ['utf-8', 'base64'].includes(arg.encoding) ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // size?: number
    ( typeof arg.size === 'undefined' || typeof arg.size === 'number' ) &&

    true
  );
}

