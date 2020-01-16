/* tslint:disable */
import {
  Gitignore,
} from '../models';

export function isGitignore(arg: any): arg is Gitignore {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

