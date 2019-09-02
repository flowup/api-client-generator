/* tslint:disable */
import {
  TargetChange,
} from '../models';
import {
  isStatus,
} from '.';

export function isTargetChange(arg: any): arg is TargetChange {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // cause?: Status
    ( typeof arg.cause === 'undefined' || isStatus(arg.cause) ) &&
  // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
  // resumeToken?: string
    ( typeof arg.resumeToken === 'undefined' || typeof arg.resumeToken === 'string' ) &&
  // targetChangeType?: string
    ( typeof arg.targetChangeType === 'undefined' || typeof arg.targetChangeType === 'string' ) &&
  // targetIds?: number[]
    ( typeof arg.targetIds === 'undefined' || (Array.isArray(arg.targetIds) && arg.targetIds.every(item => typeof item === 'number')) ) &&

    true
  );
}

