/* tslint:disable */
import {
  RestoreForm,
} from '../models';

export function isRestoreForm(arg: any): arg is RestoreForm {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // 'passwordСonfirm': string
    ( typeof arg.'passwordСonfirm' === 'string' ) &&
  // guid?: string
    ( typeof arg.guid === 'undefined' || typeof arg.guid === 'string' ) &&
  // password: string
    ( typeof arg.password === 'string' ) &&

    true
  );
}

