/* tslint:disable */
import {
  Releases,
} from '../models';

export function isReleases(arg: any): arg is Releases {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

