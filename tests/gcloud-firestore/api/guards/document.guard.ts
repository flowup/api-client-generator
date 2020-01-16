/* tslint:disable */
import {
  Document,
} from '../models';
import { isValue } from './value.guard';

export function isDocument(arg: any): arg is Document {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // createTime?: string
    ( typeof arg.createTime === 'undefined' || typeof arg.createTime === 'string' ) &&
  // fields?: { [key: string]: Value }
    ( typeof arg.fields === 'undefined' || isValue(arg.fields) ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // updateTime?: string
    ( typeof arg.updateTime === 'undefined' || typeof arg.updateTime === 'string' ) &&

    true
  );
}

