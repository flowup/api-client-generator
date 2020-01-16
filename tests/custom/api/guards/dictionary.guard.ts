/* tslint:disable */
import {
  Dictionary,
} from '../models';
import { isDictionaryItem } from './dictionary-item.guard';

export function isDictionary(arg: any): arg is Dictionary {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // [key: string]: DictionaryItem
    ( isDictionaryItem(arg.[key: string]) ) &&

    true
  );
}

