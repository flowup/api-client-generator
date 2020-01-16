/* tslint:disable */
import {
  SearchUsersByKeyword,
} from '../models';

export function isSearchUsersByKeyword(arg: any): arg is SearchUsersByKeyword {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // users?: { [key: string]: any }[]
    ( typeof arg.users === 'undefined' || (Array.isArray(arg.users) && arg.users.every(item => typeof item === '{ [key: string]: any }')) ) &&

    true
  );
}

