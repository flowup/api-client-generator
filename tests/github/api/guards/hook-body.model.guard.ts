/* tslint:disable */
import {
  HookBody,
} from '../models';

export function isHookBody(arg: any): arg is HookBody {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // active?: boolean
    ( typeof arg.active === 'undefined' || typeof arg.active === 'boolean' ) &&
  // add_events?: string[]
    ( typeof arg.add_events === 'undefined' || (Array.isArray(arg.add_events) && arg.add_events.every(item => typeof item === 'string')) ) &&

    true
  );
}

