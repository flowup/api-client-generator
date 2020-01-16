/* tslint:disable */
import {
  Target,
} from '../models';
import { isDocumentsTarget } from './documents-target.guard';
import { isQueryTarget } from './query-target.guard';

export function isTarget(arg: any): arg is Target {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // documents?: DocumentsTarget
    ( typeof arg.documents === 'undefined' || isDocumentsTarget(arg.documents) ) &&
  // once?: boolean
    ( typeof arg.once === 'undefined' || typeof arg.once === 'boolean' ) &&
  // query?: QueryTarget
    ( typeof arg.query === 'undefined' || isQueryTarget(arg.query) ) &&
  // readTime?: string
    ( typeof arg.readTime === 'undefined' || typeof arg.readTime === 'string' ) &&
  // resumeToken?: string
    ( typeof arg.resumeToken === 'undefined' || typeof arg.resumeToken === 'string' ) &&
  // targetId?: number
    ( typeof arg.targetId === 'undefined' || typeof arg.targetId === 'number' ) &&

    true
  );
}

