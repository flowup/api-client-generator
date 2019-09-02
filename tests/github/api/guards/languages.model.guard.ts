/* tslint:disable */
import {
  Languages,
} from '../models';

export function isLanguages(arg: any): arg is Languages {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // [key: string]: number
    ( typeof arg.[key: string] === 'number' ) &&

    true
  );
}

