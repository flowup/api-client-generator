/* tslint:disable */
import {
  OrgTeamsPost,
} from '../models';

export function isOrgTeamsPost(arg: any): arg is OrgTeamsPost {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // name: string
    ( typeof arg.name === 'string' ) &&
  // permission?: any
    ( typeof arg.permission === 'undefined' || isany(arg.permission) ) &&
  // repo_names?: string[]
    ( typeof arg.repo_names === 'undefined' || (Array.isArray(arg.repo_names) && arg.repo_names.every(item => typeof item === 'string')) ) &&

    true
  );
}

