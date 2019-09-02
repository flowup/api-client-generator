/* tslint:disable */
import {
  Events,
} from '../models';

export function isEvents(arg: any): arg is Events {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // actor?: { [key: string]: any }
    ( typeof arg.actor === 'undefined' || typeof arg.actor === '{ [key: string]: any }' ) &&
  // created_at?: { [key: string]: any }
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === '{ [key: string]: any }' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // org?: { [key: string]: any }
    ( typeof arg.org === 'undefined' || typeof arg.org === '{ [key: string]: any }' ) &&
  // payload?: { [key: string]: any }
    ( typeof arg.payload === 'undefined' || typeof arg.payload === '{ [key: string]: any }' ) &&
  // public?: boolean
    ( typeof arg.public === 'undefined' || typeof arg.public === 'boolean' ) &&
  // repo?: { [key: string]: any }
    ( typeof arg.repo === 'undefined' || typeof arg.repo === '{ [key: string]: any }' ) &&
  // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&

    true
  );
}

