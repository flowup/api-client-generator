/* tslint:disable */
import {
  CommitActivityStats,
} from '../models';

export function isCommitActivityStats(arg: any): arg is CommitActivityStats {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

