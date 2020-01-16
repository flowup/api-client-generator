/* tslint:disable */
import {
  PatchOrg,
} from '../models';

export function isPatchOrg(arg: any): arg is PatchOrg {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // billing_email?: string
    ( typeof arg.billing_email === 'undefined' || typeof arg.billing_email === 'string' ) &&
  // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
  // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
  // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

    true
  );
}

