/* tslint:disable */
import {
  UserEmails,
} from '../models';

export function isUserEmails(arg: any): arg is UserEmails {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

