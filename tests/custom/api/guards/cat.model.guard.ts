/* tslint:disable */
import {
  Cat,
} from '../models';
import {
  isMouse,
  isPet,
} from '.';

export function isCat(arg: any): arg is Cat {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // age?: number
    ( typeof arg.age === 'undefined' || typeof arg.age === 'number' ) &&
  // eaten?: Mouse[]
    ( typeof arg.eaten === 'undefined' || (Array.isArray(arg.eaten) && arg.eaten.every(item => isMouse(item))) ) &&
  // hunts?: boolean
    ( typeof arg.hunts === 'undefined' || typeof arg.hunts === 'boolean' ) &&
  // extends Pet
    isPet(arg) &&

    true
  );
}

