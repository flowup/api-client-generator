/* tslint:disable */
import {
  WriteRequest,
} from '../models';
import {
  isWrite,
} from '.';

export function isWriteRequest(arg: any): arg is WriteRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // labels?: { [key: string]: string }
    ( typeof arg.labels === 'undefined' || typeof arg.labels === 'string' ) &&
  // streamId?: string
    ( typeof arg.streamId === 'undefined' || typeof arg.streamId === 'string' ) &&
  // streamToken?: string
    ( typeof arg.streamToken === 'undefined' || typeof arg.streamToken === 'string' ) &&
  // writes?: Write[]
    ( typeof arg.writes === 'undefined' || (Array.isArray(arg.writes) && arg.writes.every(item => isWrite(item))) ) &&

    true
  );
}

