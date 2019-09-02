/* tslint:disable */
import {
  SubscribitionBody,
} from '../models';

export function isSubscribitionBody(arg: any): arg is SubscribitionBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // ignored?: boolean
    ( typeof arg.ignored === 'undefined' || typeof arg.ignored === 'boolean' ) &&
  // subscribed?: boolean
    ( typeof arg.subscribed === 'undefined' || typeof arg.subscribed === 'boolean' ) &&

    true
  );
}

