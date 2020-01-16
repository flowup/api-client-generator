/* tslint:disable */
import {
  MergesSuccessful,
} from '../models';

export function isMergesSuccessful(arg: any): arg is MergesSuccessful {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // author?: { [key: string]: any }
    ( typeof arg.author === 'undefined' || typeof arg.author === 'object' ) &&
  // comments_url?: string
    ( typeof arg.comments_url === 'undefined' || typeof arg.comments_url === 'string' ) &&
  // commit?: { [key: string]: any }
    ( typeof arg.commit === 'undefined' || typeof arg.commit === 'object' ) &&
  // committer?: { [key: string]: any }
    ( typeof arg.committer === 'undefined' || typeof arg.committer === 'object' ) &&
  // merged?: boolean
    ( typeof arg.merged === 'undefined' || typeof arg.merged === 'boolean' ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
  // parents?: { [key: string]: any }[]
    ( typeof arg.parents === 'undefined' || (Array.isArray(arg.parents) && arg.parents.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

