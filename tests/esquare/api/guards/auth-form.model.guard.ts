/* tslint:disable */
import {
  AuthForm,
} from '../models';

export function isAuthForm(arg: any): arg is AuthForm {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // email: string
    ( typeof arg.email === 'string' ) &&
  // password: string
    ( typeof arg.password === 'string' ) &&
  // rememberMe?: boolean
    ( typeof arg.rememberMe === 'undefined' || typeof arg.rememberMe === 'boolean' ) &&

    true
  );
}

