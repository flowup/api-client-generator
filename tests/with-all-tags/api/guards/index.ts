/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

function _isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && _isBlob(arg);
}

/* generated type guards */

export function isColumnModel(arg: any): arg is models.ColumnModel {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // Children?: WidgetModel[]
    ( typeof arg.Children === 'undefined' || (Array.isArray(arg.Children) && arg.Children.every((item: unknown) => isWidgetModel(item))) ) &&
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

export function isDashboardViewModel(arg: any): arg is models.DashboardViewModel {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isDummySelectorSettings(arg: any): arg is models.DummySelectorSettings {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // DummyObjId?: number
    ( typeof arg.DummyObjId === 'undefined' || typeof arg.DummyObjId === 'number' ) &&
    // OrganizerTaskElementId?: number
    ( typeof arg.OrganizerTaskElementId === 'undefined' || typeof arg.OrganizerTaskElementId === 'number' ) &&

  true
  );
  }

export function isDummySelectorViewModel(arg: any): arg is models.DummySelectorViewModel {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // DummyList?: DummyViewModel[]
    ( typeof arg.DummyList === 'undefined' || (Array.isArray(arg.DummyList) && arg.DummyList.every((item: unknown) => isDummyViewModel(item))) ) &&
    // SelectedDummyObjId?: number
    ( typeof arg.SelectedDummyObjId === 'undefined' || typeof arg.SelectedDummyObjId === 'number' ) &&

  true
  );
  }

export function isDummyViewModel(arg: any): arg is models.DummyViewModel {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // DummyNrTitel?: string
    ( typeof arg.DummyNrTitel === 'undefined' || typeof arg.DummyNrTitel === 'string' ) &&
    // DummyObjId?: number
    ( typeof arg.DummyObjId === 'undefined' || typeof arg.DummyObjId === 'number' ) &&
    // UniqueId?: string
    ( typeof arg.UniqueId === 'undefined' || typeof arg.UniqueId === 'string' ) &&

  true
  );
  }

export function isProjectTypeViewModel(arg: any): arg is models.ProjectTypeViewModel {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // Category?: string
    ( typeof arg.Category === 'undefined' || typeof arg.Category === 'string' ) &&
    // TypeId?: number
    ( typeof arg.TypeId === 'undefined' || typeof arg.TypeId === 'number' ) &&

  true
  );
  }

export function isRowModel(arg: any): arg is models.RowModel {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // Children?: ColumnModel[]
    ( typeof arg.Children === 'undefined' || (Array.isArray(arg.Children) && arg.Children.every((item: unknown) => isColumnModel(item))) ) &&
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

export function isStatusSeverity(arg: any): arg is models.StatusSeverity {
  return arg != null
   || arg === models.StatusSeverity.Unknown
   || arg === models.StatusSeverity.OK
   || arg === models.StatusSeverity.Warning
   || arg === models.StatusSeverity.Error
   || arg === models.StatusSeverity.Critical
  ;
  }

export function isWidgetModel(arg: any): arg is models.WidgetModel {
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

export function isWidgetTypeViewModel(arg: any): arg is models.WidgetTypeViewModel {
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


