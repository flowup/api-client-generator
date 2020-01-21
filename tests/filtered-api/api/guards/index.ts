/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

export function isany(_: any): _ is any {
  return true;
}

export function isstring(arg: any): arg is string {
  return typeof arg === 'string';
}

export function isnumber(arg: any): arg is number {
  return typeof arg === 'number';
}

export function isboolean(arg: any): arg is boolean {
  return typeof arg === 'boolean';
}

export function isObject(arg: any): arg is any {
  return typeof arg === 'object';
}

export function isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && isBlob(arg);
}

/* generated type guards */

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
    ( typeof arg.DummyList === 'undefined' || (Array.isArray(arg.DummyList) && arg.DummyList.every(item => isDummyViewModel(item))) ) &&
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


