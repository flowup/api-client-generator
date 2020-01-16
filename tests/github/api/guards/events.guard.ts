/* tslint:disable */
import {
  Events,
} from '../models';

export function isEvents(arg: any): arg is Events {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // actor?: { [key: string]: any }
    ( typeof arg.actor === 'undefined' || typeof arg.actor === 'object' ) &&
  // created_at?: { [key: string]: any }
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'object' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // org?: { [key: string]: any }
    ( typeof arg.org === 'undefined' || typeof arg.org === 'object' ) &&
  // payload?: { [key: string]: any }
    ( typeof arg.payload === 'undefined' || typeof arg.payload === 'object' ) &&
  // public?: boolean
    ( typeof arg.public === 'undefined' || typeof arg.public === 'boolean' ) &&
  // repo?: { [key: string]: any }
    ( typeof arg.repo === 'undefined' || typeof arg.repo === 'object' ) &&
  // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&

    true
  );
}

