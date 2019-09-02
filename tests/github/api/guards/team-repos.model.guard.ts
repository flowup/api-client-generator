/* tslint:disable */
import {
  TeamRepos,
} from '../models';

export function isTeamRepos(arg: any): arg is TeamRepos {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

