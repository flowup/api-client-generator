/* tslint:disable */
import {
  Issue,
} from '../models';

export function isIssue(arg: any): arg is Issue {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // assignee?: string
    ( typeof arg.assignee === 'undefined' || typeof arg.assignee === 'string' ) &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // labels?: string[]
    ( typeof arg.labels === 'undefined' || (Array.isArray(arg.labels) && arg.labels.every(item => typeof item === 'string')) ) &&
  // milestone?: number
    ( typeof arg.milestone === 'undefined' || typeof arg.milestone === 'number' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

