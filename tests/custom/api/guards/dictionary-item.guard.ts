/* tslint:disable */
import {
  DictionaryItem,
} from '../models';

export function isDictionaryItem(arg: any): arg is DictionaryItem {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // [key: string]: number
    ( typeof arg.[key: string] === 'number' ) &&

    true
  );
}

