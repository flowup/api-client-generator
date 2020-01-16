/* tslint:disable */
import {
  PullRequest,
} from '../models';

export function isPullRequest(arg: any): arg is PullRequest {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // _links?: { [key: string]: any }
    ( typeof arg._links === 'undefined' || typeof arg._links === 'object' ) &&
  // additions?: number
    ( typeof arg.additions === 'undefined' || typeof arg.additions === 'number' ) &&
  // base?: { [key: string]: any }
    ( typeof arg.base === 'undefined' || typeof arg.base === 'object' ) &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // changed_files?: number
    ( typeof arg.changed_files === 'undefined' || typeof arg.changed_files === 'number' ) &&
  // closed_at?: string
    ( typeof arg.closed_at === 'undefined' || typeof arg.closed_at === 'string' ) &&
  // comments?: number
    ( typeof arg.comments === 'undefined' || typeof arg.comments === 'number' ) &&
  // commits?: number
    ( typeof arg.commits === 'undefined' || typeof arg.commits === 'number' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // deletions?: number
    ( typeof arg.deletions === 'undefined' || typeof arg.deletions === 'number' ) &&
  // diff_url?: string
    ( typeof arg.diff_url === 'undefined' || typeof arg.diff_url === 'string' ) &&
  // head?: { [key: string]: any }
    ( typeof arg.head === 'undefined' || typeof arg.head === 'object' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // issue_url?: string
    ( typeof arg.issue_url === 'undefined' || typeof arg.issue_url === 'string' ) &&
  // merge_commit_sha?: string
    ( typeof arg.merge_commit_sha === 'undefined' || typeof arg.merge_commit_sha === 'string' ) &&
  // mergeable?: boolean
    ( typeof arg.mergeable === 'undefined' || typeof arg.mergeable === 'boolean' ) &&
  // merged?: boolean
    ( typeof arg.merged === 'undefined' || typeof arg.merged === 'boolean' ) &&
  // merged_at?: string
    ( typeof arg.merged_at === 'undefined' || typeof arg.merged_at === 'string' ) &&
  // merged_by?: { [key: string]: any }
    ( typeof arg.merged_by === 'undefined' || typeof arg.merged_by === 'object' ) &&
  // number?: number
    ( typeof arg.number === 'undefined' || typeof arg.number === 'number' ) &&
  // patch_url?: string
    ( typeof arg.patch_url === 'undefined' || typeof arg.patch_url === 'string' ) &&
  // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&
  // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&
  // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

    true
  );
}

