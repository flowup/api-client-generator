/* tslint:disable */
import {
  RepoComments,
} from '../models';

export function isRepoComments(arg: any): arg is RepoComments {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

