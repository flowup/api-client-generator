/* tslint:disable */
import {
  GitRefPatch,
} from '../models';

export function isGitRefPatch(arg: any): arg is GitRefPatch {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // force?: boolean
    ( typeof arg.force === 'undefined' || typeof arg.force === 'boolean' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&

    true
  );
}

