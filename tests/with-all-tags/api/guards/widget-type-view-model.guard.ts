/* tslint:disable */
import {
  WidgetTypeViewModel,
} from '../models';
import { isStatusSeverity } from './status-severity.guard';

export function isWidgetTypeViewModel(arg: any): arg is WidgetTypeViewModel {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // Beschreibung?: string
    ( typeof arg.Beschreibung === 'undefined' || typeof arg.Beschreibung === 'string' ) &&
  // Id?: number
    ( typeof arg.Id === 'undefined' || typeof arg.Id === 'number' ) &&
  // KeySystem?: { [key: string]: string }
    ( typeof arg.KeySystem === 'undefined' || typeof arg.KeySystem === 'string' ) &&
  // ModulName?: string
    ( typeof arg.ModulName === 'undefined' || typeof arg.ModulName === 'string' ) &&
  // ModulNameExtern?: string
    ( typeof arg.ModulNameExtern === 'undefined' || typeof arg.ModulNameExtern === 'string' ) &&
  // Order?: number
    ( typeof arg.Order === 'undefined' || typeof arg.Order === 'number' ) &&
  // OrganizerTaskId?: number
    ( typeof arg.OrganizerTaskId === 'undefined' || typeof arg.OrganizerTaskId === 'number' ) &&
  // RefSystem?: { [key: string]: string }
    ( typeof arg.RefSystem === 'undefined' || typeof arg.RefSystem === 'string' ) &&
  // Severity?: StatusSeverity
    ( typeof arg.Severity === 'undefined' || isStatusSeverity(arg.Severity) ) &&
  // SysApplicationId?: number
    ( typeof arg.SysApplicationId === 'undefined' || typeof arg.SysApplicationId === 'number' ) &&
  // Titel?: string
    ( typeof arg.Titel === 'undefined' || typeof arg.Titel === 'string' ) &&

    true
  );
}

