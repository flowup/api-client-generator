/* tslint:disable */
import {
  SearchUsers,
} from '../models';

export function isSearchUsers(arg: any): arg is SearchUsers {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // items?: { [key: string]: any }[]
    ( typeof arg.items === 'undefined' || (Array.isArray(arg.items) && arg.items.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // total_count?: number
    ( typeof arg.total_count === 'undefined' || typeof arg.total_count === 'number' ) &&

    true
  );
}

