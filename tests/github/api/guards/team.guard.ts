/* tslint:disable */
import {
  Team,
} from '../models';

export function isTeam(arg: any): arg is Team {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // members_count?: number
    ( typeof arg.members_count === 'undefined' || typeof arg.members_count === 'number' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // permission?: string
    ( typeof arg.permission === 'undefined' || typeof arg.permission === 'string' ) &&
  // repos_count?: number
    ( typeof arg.repos_count === 'undefined' || typeof arg.repos_count === 'number' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

