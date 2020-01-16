/* tslint:disable */
import {
  CommitRequest,
} from '../models';
import { isWrite } from './write.guard';

export function isCommitRequest(arg: any): arg is CommitRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // transaction?: string
    ( typeof arg.transaction === 'undefined' || typeof arg.transaction === 'string' ) &&
  // writes?: Write[]
    ( typeof arg.writes === 'undefined' || (Array.isArray(arg.writes) && arg.writes.every(item => isWrite(item))) ) &&

    true
  );
}

