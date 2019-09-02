/* tslint:disable */
import {
  Meta,
} from '../models';

export function isMeta(arg: any): arg is Meta {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // git?: string[]
    ( typeof arg.git === 'undefined' || (Array.isArray(arg.git) && arg.git.every(item => typeof item === 'string')) ) &&
  // hooks?: string[]
    ( typeof arg.hooks === 'undefined' || (Array.isArray(arg.hooks) && arg.hooks.every(item => typeof item === 'string')) ) &&

    true
  );
}

