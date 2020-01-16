/* tslint:disable */
import {
  GitCommit,
} from '../models';

export function isGitCommit(arg: any): arg is GitCommit {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
  // parents?: string
    ( typeof arg.parents === 'undefined' || typeof arg.parents === 'string' ) &&
  // tree?: string
    ( typeof arg.tree === 'undefined' || typeof arg.tree === 'string' ) &&

    true
  );
}

