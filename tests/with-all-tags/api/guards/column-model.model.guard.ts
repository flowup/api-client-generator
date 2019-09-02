/* tslint:disable */
import {
  ColumnModel,
} from '../models';
import {
  isWidgetModel,
} from '.';

export function isColumnModel(arg: any): arg is ColumnModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // Children?: WidgetModel[]
    ( typeof arg.Children === 'undefined' || (Array.isArray(arg.Children) && arg.Children.every(item => isWidgetModel(item))) ) &&
  // Id?: number
    ( typeof arg.Id === 'undefined' || typeof arg.Id === 'number' ) &&
  // ParentId?: number
    ( typeof arg.ParentId === 'undefined' || typeof arg.ParentId === 'number' ) &&
  // Position?: number
    ( typeof arg.Position === 'undefined' || typeof arg.Position === 'number' ) &&
  // Width?: number
    ( typeof arg.Width === 'undefined' || typeof arg.Width === 'number' ) &&

    true
  );
}

