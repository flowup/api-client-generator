/* tslint:disable */

export interface PasswordCreationPolicies {
  passwordMinChars?: number;
  passwordMinDigits?: number;
  passwordMinLength?: number;
  passwordMinSpecialChars?: number;
  passwordMinUpperChars?: number;
  passwordNotMatchPrevious?: number;
  passwordResetLinkExpiration?: number;
  preventOldPasswordReuse?: boolean;
}
