/* tslint:disable */
import {
  PostGist,
} from '../models';

export function isPostGist(arg: any): arg is PostGist {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // files?: { [key: string]: any }
    ( typeof arg.files === 'undefined' || typeof arg.files === '{ [key: string]: any }' ) &&
  // public?: boolean
    ( typeof arg.public === 'undefined' || typeof arg.public === 'boolean' ) &&

    true
  );
}

