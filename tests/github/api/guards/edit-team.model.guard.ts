/* tslint:disable */
import {
  EditTeam,
} from '../models';

export function isEditTeam(arg: any): arg is EditTeam {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // name: string
    ( typeof arg.name === 'string' ) &&
  // permission?: 'pull' | 'push' | 'admin'
    ( typeof arg.permission === 'undefined' || ['pull', 'push', 'admin'].includes(arg.permission) ) &&

    true
  );
}

