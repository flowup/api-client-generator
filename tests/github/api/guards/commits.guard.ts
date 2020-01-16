/* tslint:disable */
import {
  Commits,
} from '../models';

export function isCommits(arg: any): arg is Commits {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

