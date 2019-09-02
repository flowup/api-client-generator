/* tslint:disable */
import {
  RepoEdit,
} from '../models';

export function isRepoEdit(arg: any): arg is RepoEdit {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // has_downloads?: boolean
    ( typeof arg.has_downloads === 'undefined' || typeof arg.has_downloads === 'boolean' ) &&
  // has_issues?: boolean
    ( typeof arg.has_issues === 'undefined' || typeof arg.has_issues === 'boolean' ) &&
  // has_wiki?: boolean
    ( typeof arg.has_wiki === 'undefined' || typeof arg.has_wiki === 'boolean' ) &&
  // homepage?: string
    ( typeof arg.homepage === 'undefined' || typeof arg.homepage === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // private?: boolean
    ( typeof arg.private === 'undefined' || typeof arg.private === 'boolean' ) &&

    true
  );
}

