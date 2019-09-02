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
  // permission?: any
    ( typeof arg.permission === 'undefined' || isany(arg.permission) ) &&

    true
  );
}

