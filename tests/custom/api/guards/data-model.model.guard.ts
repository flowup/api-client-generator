/* tslint:disable */
import {
  DataModel,
} from '../models';
import {
  isData,
  isItemList,
  isPet,
} from '.';

export function isDataModel(arg: any): arg is DataModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // audioConfig?: Data
    ( typeof arg.audioConfig === 'undefined' || ( isData(arg.audioConfig) ) ) &&
  // entities?: number[]
    ( typeof arg.entities === 'undefined' || (Array.isArray(arg.entities) && arg.entities.every(item => typeof item === 'number')) ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // imageData?: string
    ( typeof arg.imageData === 'undefined' || typeof arg.imageData === 'string' ) &&
  // imageUrl?: string
    ( typeof arg.imageUrl === 'undefined' || typeof arg.imageUrl === 'string' ) &&
  // roleId?: number
    ( typeof arg.roleId === 'undefined' || typeof arg.roleId === 'number' ) &&
  // testWithArray?: Pet[] & Data
    ( typeof arg.testWithArray === 'undefined' || ( (Array.isArray(arg.testWithArray) && arg.testWithArray.every(item => isPet(item))) && isData(arg.testWithArray) ) ) &&
  // text?: ItemList & Data
    ( typeof arg.text === 'undefined' || ( isItemList(arg.text) && isData(arg.text) ) ) &&

    true
  );
}

