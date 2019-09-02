/* tslint:disable */
import {
  Issues,
} from '../models';

export function isIssues(arg: any): arg is Issues {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

