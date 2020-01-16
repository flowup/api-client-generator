/* tslint:disable */
import {
  Tags,
} from '../models';

export function isTags(arg: any): arg is Tags {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // message: string
    ( typeof arg.message === 'string' ) &&
  // object: string
    ( typeof arg.object === 'string' ) &&
  // tag: string
    ( typeof arg.tag === 'string' ) &&
  // tagger: { [key: string]: any }
    ( typeof arg.tagger === 'object' ) &&
  // type: string
    ( typeof arg.type === 'string' ) &&

    true
  );
}

