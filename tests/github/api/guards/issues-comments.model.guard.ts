/* tslint:disable */
import {
  IssuesComments,
} from '../models';

export function isIssuesComments(arg: any): arg is IssuesComments {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

