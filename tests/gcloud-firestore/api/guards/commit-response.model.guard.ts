/* tslint:disable */
import {
  CommitResponse,
} from '../models';
import {
  isWriteResult,
} from '.';

export function isCommitResponse(arg: any): arg is CommitResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // commitTime?: string
    ( typeof arg.commitTime === 'undefined' || typeof arg.commitTime === 'string' ) &&
  // writeResults?: WriteResult[]
    ( typeof arg.writeResults === 'undefined' || (Array.isArray(arg.writeResults) && arg.writeResults.every(item => isWriteResult(item))) ) &&

    true
  );
}

