/* tslint:disable */
import {
  PasswordVerificationPolicies,
} from '../models';

export function isPasswordVerificationPolicies(arg: any): arg is PasswordVerificationPolicies {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // changePasswordInterval?: number
    ( typeof arg.changePasswordInterval === 'undefined' || typeof arg.changePasswordInterval === 'number' ) &&
  // lockAfterAttempts?: number
    ( typeof arg.lockAfterAttempts === 'undefined' || typeof arg.lockAfterAttempts === 'number' ) &&
  // passwordExpiryNotification?: number
    ( typeof arg.passwordExpiryNotification === 'undefined' || typeof arg.passwordExpiryNotification === 'number' ) &&
  // reenableTimeout?: number
    ( typeof arg.reenableTimeout === 'undefined' || typeof arg.reenableTimeout === 'number' ) &&

    true
  );
}

