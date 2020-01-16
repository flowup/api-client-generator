/* tslint:disable */
import {
  IssuesComment,
} from '../models';

export function isIssuesComment(arg: any): arg is IssuesComment {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
  // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

    true
  );
}

