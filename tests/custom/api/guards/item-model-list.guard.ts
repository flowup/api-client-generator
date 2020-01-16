/* tslint:disable */
import {
  ItemModelList,
} from '../models';
import { isDataModel } from './data-model.guard';

export function isItemModelList(arg: any): arg is ItemModelList {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // data: DataModel[]
    ( (Array.isArray(arg.data) && arg.data.every(item => isDataModel(item))) ) &&

    true
  );
}

