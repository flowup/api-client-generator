/* tslint:disable */
import {
  ReleaseCreate,
} from '../models';

export function isReleaseCreate(arg: any): arg is ReleaseCreate {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // body?: string
    ( typeof arg.body === 'undefined' || typeof arg.body === 'string' ) &&
  // draft?: boolean
    ( typeof arg.draft === 'undefined' || typeof arg.draft === 'boolean' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // prerelease?: boolean
    ( typeof arg.prerelease === 'undefined' || typeof arg.prerelease === 'boolean' ) &&
  // tag_name?: string
    ( typeof arg.tag_name === 'undefined' || typeof arg.tag_name === 'string' ) &&
  // target_commitish?: string
    ( typeof arg.target_commitish === 'undefined' || typeof arg.target_commitish === 'string' ) &&

    true
  );
}

