/* tslint:disable */
import {
  Milestone,
} from '../models';

export function isMilestone(arg: any): arg is Milestone {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // closed_issues?: number
    ( typeof arg.closed_issues === 'undefined' || typeof arg.closed_issues === 'number' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // creator?: { [key: string]: any }
    ( typeof arg.creator === 'undefined' || typeof arg.creator === 'object' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // due_on?: string
    ( typeof arg.due_on === 'undefined' || typeof arg.due_on === 'string' ) &&
  // number?: number
    ( typeof arg.number === 'undefined' || typeof arg.number === 'number' ) &&
  // open_issues?: number
    ( typeof arg.open_issues === 'undefined' || typeof arg.open_issues === 'number' ) &&
  // state?: 'open' | 'closed'
    ( typeof arg.state === 'undefined' || ['open', 'closed'].includes(arg.state) ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

