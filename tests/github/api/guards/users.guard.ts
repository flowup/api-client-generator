/* tslint:disable */
import {
  Users,
} from '../models';

export function isUsers(arg: any): arg is Users {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

