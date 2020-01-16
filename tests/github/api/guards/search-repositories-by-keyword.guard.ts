/* tslint:disable */
import {
  SearchRepositoriesByKeyword,
} from '../models';

export function isSearchRepositoriesByKeyword(arg: any): arg is SearchRepositoriesByKeyword {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // repositories?: { [key: string]: any }[]
    ( typeof arg.repositories === 'undefined' || (Array.isArray(arg.repositories) && arg.repositories.every(item => typeof item === '{ [key: string]: any }')) ) &&

    true
  );
}

