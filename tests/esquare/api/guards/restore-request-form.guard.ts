/* tslint:disable */
import {
  RestoreRequestForm,
} from '../models';

export function isRestoreRequestForm(arg: any): arg is RestoreRequestForm {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // email: string
    ( typeof arg.email === 'string' ) &&

    true
  );
}

