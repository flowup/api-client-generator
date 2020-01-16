/* tslint:disable */
import {
  SearchUserByEmail,
} from '../models';

export function isSearchUserByEmail(arg: any): arg is SearchUserByEmail {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // user?: { [key: string]: any }
    ( typeof arg.user === 'undefined' || typeof arg.user === 'object' ) &&

    true
  );
}

