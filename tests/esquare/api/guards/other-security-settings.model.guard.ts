/* tslint:disable */
import {
  OtherSecuritySettings,
} from '../models';

export function isOtherSecuritySettings(arg: any): arg is OtherSecuritySettings {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // inactivityTimeout?: number
    ( typeof arg.inactivityTimeout === 'undefined' || typeof arg.inactivityTimeout === 'number' ) &&

    true
  );
}

