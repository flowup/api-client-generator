/* tslint:disable */
import {
  Contributors,
} from '../models';

export function isContributors(arg: any): arg is Contributors {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

