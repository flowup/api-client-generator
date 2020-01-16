/* tslint:disable */
import {
  SearchIssuesByKeyword,
} from '../models';

export function isSearchIssuesByKeyword(arg: any): arg is SearchIssuesByKeyword {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // issues?: { [key: string]: any }[]
    ( typeof arg.issues === 'undefined' || (Array.isArray(arg.issues) && arg.issues.every(item => typeof item === '{ [key: string]: any }')) ) &&

    true
  );
}

