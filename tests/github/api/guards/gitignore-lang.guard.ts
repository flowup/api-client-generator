/* tslint:disable */
import {
  GitignoreLang,
} from '../models';

export function isGitignoreLang(arg: any): arg is GitignoreLang {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // source?: string
    ( typeof arg.source === 'undefined' || typeof arg.source === 'string' ) &&

    true
  );
}

