/* tslint:disable */
import {
  UserUpdate,
} from '../models';

export function isUserUpdate(arg: any): arg is UserUpdate {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // bio?: string
    ( typeof arg.bio === 'undefined' || typeof arg.bio === 'string' ) &&
  // blog?: string
    ( typeof arg.blog === 'undefined' || typeof arg.blog === 'string' ) &&
  // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
  // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
  // hireable?: boolean
    ( typeof arg.hireable === 'undefined' || typeof arg.hireable === 'boolean' ) &&
  // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

    true
  );
}

