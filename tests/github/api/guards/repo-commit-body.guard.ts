/* tslint:disable */
import {
  RepoCommitBody,
} from '../models';

export function isRepoCommitBody(arg: any): arg is RepoCommitBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
  // message: string
    ( typeof arg.message === 'string' ) &&
  // parents: string[]
    ( (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === 'string')) ) &&
  // tree: string
    ( typeof arg.tree === 'string' ) &&

    true
  );
}

