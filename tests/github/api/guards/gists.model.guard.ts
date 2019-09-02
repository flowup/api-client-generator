/* tslint:disable */
import {
  Gists,
} from '../models';

export function isGists(arg: any): arg is Gists {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

