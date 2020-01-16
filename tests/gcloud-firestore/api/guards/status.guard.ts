/* tslint:disable */
import {
  Status,
} from '../models';

export function isStatus(arg: any): arg is Status {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // code?: number
    ( typeof arg.code === 'undefined' || typeof arg.code === 'number' ) &&
  // details?: { [key: string]: any }[]
    ( typeof arg.details === 'undefined' || (Array.isArray(arg.details) && arg.details.every(item => typeof item === '{ [key: string]: any }')) ) &&
  // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&

    true
  );
}

