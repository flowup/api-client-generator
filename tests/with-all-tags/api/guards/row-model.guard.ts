/* tslint:disable */
import {
  RowModel,
} from '../models';
import { isColumnModel } from './column-model.guard';

export function isRowModel(arg: any): arg is RowModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // Children?: ColumnModel[]
    ( typeof arg.Children === 'undefined' || (Array.isArray(arg.Children) && arg.Children.every(item => isColumnModel(item))) ) &&
  // Id?: number
    ( typeof arg.Id === 'undefined' || typeof arg.Id === 'number' ) &&
  // ParentId?: number
    ( typeof arg.ParentId === 'undefined' || typeof arg.ParentId === 'number' ) &&
  // Position?: number
    ( typeof arg.Position === 'undefined' || typeof arg.Position === 'number' ) &&
  // UserId?: number
    ( typeof arg.UserId === 'undefined' || typeof arg.UserId === 'number' ) &&

    true
  );
}

