/* tslint:disable */
import {
  Assignees,
} from '../models';

export function isAssignees(arg: any): arg is Assignees {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

