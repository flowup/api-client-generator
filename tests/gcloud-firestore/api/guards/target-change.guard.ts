/* tslint:disable */
import {
  TargetChange,
} from '../models';
import { isStatus } from './status.guard';

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
  // targetChangeType?: 'NO_CHANGE' | 'ADD' | 'REMOVE' | 'CURRENT' | 'RESET'
    ( typeof arg.targetChangeType === 'undefined' || ['NO_CHANGE', 'ADD', 'REMOVE', 'CURRENT', 'RESET'].includes(arg.targetChangeType) ) &&
  // targetIds?: number[]
    ( typeof arg.targetIds === 'undefined' || (Array.isArray(arg.targetIds) && arg.targetIds.every(item => typeof item === 'number')) ) &&

    true
  );
}

