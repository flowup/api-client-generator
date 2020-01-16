/* tslint:disable */
import {
  Trees,
} from '../models';

export function isTrees(arg: any): arg is Trees {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // base_tree?: string
    ( typeof arg.base_tree === 'undefined' || typeof arg.base_tree === 'string' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // tree?: { [key: string]: any }[]
    ( typeof arg.tree === 'undefined' || (Array.isArray(arg.tree) && arg.tree.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

