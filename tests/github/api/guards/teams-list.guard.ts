/* tslint:disable */
import {
  TeamsList,
} from '../models';

export function isTeamsList(arg: any): arg is TeamsList {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

