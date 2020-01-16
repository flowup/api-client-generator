/* tslint:disable */
import {
  WriteResponse,
} from '../models';
import { isWriteResult } from './write-result.guard';

export function isWriteResponse(arg: any): arg is WriteResponse {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // commitTime?: string
    ( typeof arg.commitTime === 'undefined' || typeof arg.commitTime === 'string' ) &&
  // streamId?: string
    ( typeof arg.streamId === 'undefined' || typeof arg.streamId === 'string' ) &&
  // streamToken?: string
    ( typeof arg.streamToken === 'undefined' || typeof arg.streamToken === 'string' ) &&
  // writeResults?: WriteResult[]
    ( typeof arg.writeResults === 'undefined' || (Array.isArray(arg.writeResults) && arg.writeResults.every(item => isWriteResult(item))) ) &&

    true
  );
}

