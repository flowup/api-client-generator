/* tslint:disable */
import {
  CompareCommits,
} from '../models';

export function isCompareCommits(arg: any): arg is CompareCommits {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // ahead_by?: number
    ( typeof arg.ahead_by === 'undefined' || typeof arg.ahead_by === 'number' ) &&
  // base_commit?: { [key: string]: any }
    ( typeof arg.base_commit === 'undefined' || typeof arg.base_commit === '{ [key: string]: any }' ) &&
  // behind_by?: number
    ( typeof arg.behind_by === 'undefined' || typeof arg.behind_by === 'number' ) &&
  // commits?: { [key: string]: any }[]
    ( typeof arg.commits === 'undefined' || (Array.isArray(arg.commits) && arg.commits.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // diff_url?: string
    ( typeof arg.diff_url === 'undefined' || typeof arg.diff_url === 'string' ) &&
  // files?: { [key: string]: any }[]
    ( typeof arg.files === 'undefined' || (Array.isArray(arg.files) && arg.files.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // patch_url?: string
    ( typeof arg.patch_url === 'undefined' || typeof arg.patch_url === 'string' ) &&
  // permalink_url?: string
    ( typeof arg.permalink_url === 'undefined' || typeof arg.permalink_url === 'string' ) &&
  // status?: string
    ( typeof arg.status === 'undefined' || typeof arg.status === 'string' ) &&
  // total_commits?: number
    ( typeof arg.total_commits === 'undefined' || typeof arg.total_commits === 'number' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

