/* tslint:disable */
import {
  CommitComments,
} from '../models';

export function isCommitComments(arg: any): arg is CommitComments {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // commit_id?: string
    ( typeof arg.commit_id === 'undefined' || typeof arg.commit_id === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // line?: number
    ( typeof arg.line === 'undefined' || typeof arg.line === 'number' ) &&
  // path?: string
    ( typeof arg.path === 'undefined' || typeof arg.path === 'string' ) &&
  // position?: number
    ( typeof arg.position === 'undefined' || typeof arg.position === 'number' ) &&
  // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
  // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === '{ [key: string]: any }' ) &&

    true
  );
}

