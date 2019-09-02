/* tslint:disable */
import {
  ItemList,
} from '../models';
import {
  isData,
} from '.';

export function isItemList(arg: any): arg is ItemList {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // data: Data[]
    ( (Array.isArray(arg.data) && arg.data.every(item => isData(item))) ) &&

    true
  );
}

