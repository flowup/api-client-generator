/* tslint:disable */
import {
  MyInterface,
} from '../models';
import {
  isData,
} from '.';

export function isMyInterface(arg: any): arg is MyInterface {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // myId?: string
    ( typeof arg.myId === 'undefined' || typeof arg.myId === 'string' ) &&
  // myMap?: { [key: string]: Data }
    ( typeof arg.myMap === 'undefined' || isData(arg.myMap) ) &&
  // myName?: string
    ( typeof arg.myName === 'undefined' || typeof arg.myName === 'string' ) &&

    true
  );
}

