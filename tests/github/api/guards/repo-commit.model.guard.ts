/* tslint:disable */
import {
  RepoCommit,
} from '../models';

export function isRepoCommit(arg: any): arg is RepoCommit {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === '{ [key: string]: any }' ) &&
  // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === '{ [key: string]: any }' ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
  // parents?: { [key: string]: any }[]
    ( typeof arg.parents === 'undefined' || (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // tree?: { [key: string]: any }
    ( typeof arg.tree === 'undefined' || typeof arg.tree === '{ [key: string]: any }' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

