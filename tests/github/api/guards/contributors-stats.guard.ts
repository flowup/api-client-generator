/* tslint:disable */
import {
  ContributorsStats,
} from '../models';

export function isContributorsStats(arg: any): arg is ContributorsStats {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

