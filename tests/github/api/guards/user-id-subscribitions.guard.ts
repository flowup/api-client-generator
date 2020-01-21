/* tslint:disable */
import {
  UserIdSubscribitions,
} from '../models';

export function isUserIdSubscribitions(arg: any): arg is UserIdSubscribitions {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

