/* tslint:disable */
import {
  Emojis,
} from '../models';

export function isEmojis(arg: any): arg is Emojis {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // '-1'?: string
    ( typeof arg.'-1' === 'undefined' || typeof arg.'-1' === 'string' ) &&
  // '+1'?: string
    ( typeof arg.'+1' === 'undefined' || typeof arg.'+1' === 'string' ) &&
  // '100'?: string
    ( typeof arg.'100' === 'undefined' || typeof arg.'100' === 'string' ) &&
  // '1234'?: string
    ( typeof arg.'1234' === 'undefined' || typeof arg.'1234' === 'string' ) &&
  // '8ball'?: string
    ( typeof arg.'8ball' === 'undefined' || typeof arg.'8ball' === 'string' ) &&
  // a?: string
    ( typeof arg.a === 'undefined' || typeof arg.a === 'string' ) &&
  // ab?: string
    ( typeof arg.ab === 'undefined' || typeof arg.ab === 'string' ) &&

    true
  );
}

