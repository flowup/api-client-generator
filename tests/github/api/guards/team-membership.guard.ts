/* tslint:disable */
import {
  TeamMembership,
} from '../models';

export function isTeamMembership(arg: any): arg is TeamMembership {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

