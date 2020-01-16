/* tslint:disable */
import {
  Teams,
} from '../models';

export function isTeams(arg: any): arg is Teams {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

