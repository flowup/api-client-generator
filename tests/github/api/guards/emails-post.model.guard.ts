/* tslint:disable */
import {
  EmailsPost,
} from '../models';

export function isEmailsPost(arg: any): arg is EmailsPost {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

