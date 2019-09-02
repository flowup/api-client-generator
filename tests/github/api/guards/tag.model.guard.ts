/* tslint:disable */
import {
  Tag,
} from '../models';

export function isTag(arg: any): arg is Tag {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
  // object?: { [key: string]: any }
    ( typeof arg.object === 'undefined' || typeof arg.object === '{ [key: string]: any }' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // tag?: string
    ( typeof arg.tag === 'undefined' || typeof arg.tag === 'string' ) &&
  // tagger?: { [key: string]: any }
    ( typeof arg.tagger === 'undefined' || typeof arg.tagger === '{ [key: string]: any }' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

