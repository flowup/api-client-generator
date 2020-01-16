/* tslint:disable */
import {
  WidgetModel,
} from '../models';

export function isWidgetModel(arg: any): arg is WidgetModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // Id?: number
    ( typeof arg.Id === 'undefined' || typeof arg.Id === 'number' ) &&
  // ParentId?: number
    ( typeof arg.ParentId === 'undefined' || typeof arg.ParentId === 'number' ) &&
  // Position?: number
    ( typeof arg.Position === 'undefined' || typeof arg.Position === 'number' ) &&
  // Settings?: string
    ( typeof arg.Settings === 'undefined' || typeof arg.Settings === 'string' ) &&
  // TypeId?: number
    ( typeof arg.TypeId === 'undefined' || typeof arg.TypeId === 'number' ) &&

    true
  );
}

