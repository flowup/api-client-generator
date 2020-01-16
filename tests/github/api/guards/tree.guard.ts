/* tslint:disable */
import {
  Tree,
} from '../models';

export function isTree(arg: any): arg is Tree {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // tree?: { [key: string]: any }[]
    ( typeof arg.tree === 'undefined' || (Array.isArray(arg.tree) && arg.tree.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

