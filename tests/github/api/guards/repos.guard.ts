/* tslint:disable */
import {
  Repos,
} from '../models';

export function isRepos(arg: any): arg is Repos {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

