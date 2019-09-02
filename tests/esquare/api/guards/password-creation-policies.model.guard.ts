/* tslint:disable */
import {
  PasswordCreationPolicies,
} from '../models';

export function isPasswordCreationPolicies(arg: any): arg is PasswordCreationPolicies {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // passwordMinChars?: number
    ( typeof arg.passwordMinChars === 'undefined' || typeof arg.passwordMinChars === 'number' ) &&
  // passwordMinDigits?: number
    ( typeof arg.passwordMinDigits === 'undefined' || typeof arg.passwordMinDigits === 'number' ) &&
  // passwordMinLength?: number
    ( typeof arg.passwordMinLength === 'undefined' || typeof arg.passwordMinLength === 'number' ) &&
  // passwordMinSpecialChars?: number
    ( typeof arg.passwordMinSpecialChars === 'undefined' || typeof arg.passwordMinSpecialChars === 'number' ) &&
  // passwordMinUpperChars?: number
    ( typeof arg.passwordMinUpperChars === 'undefined' || typeof arg.passwordMinUpperChars === 'number' ) &&
  // passwordNotMatchPrevious?: number
    ( typeof arg.passwordNotMatchPrevious === 'undefined' || typeof arg.passwordNotMatchPrevious === 'number' ) &&
  // passwordResetLinkExpiration?: number
    ( typeof arg.passwordResetLinkExpiration === 'undefined' || typeof arg.passwordResetLinkExpiration === 'number' ) &&
  // preventOldPasswordReuse?: boolean
    ( typeof arg.preventOldPasswordReuse === 'undefined' || typeof arg.preventOldPasswordReuse === 'boolean' ) &&

    true
  );
}

