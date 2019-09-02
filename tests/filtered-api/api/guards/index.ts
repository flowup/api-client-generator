/* tslint:disable */

export { isDummySelectorSettings } from './dummy-selector-settings.model.guard';
export { isDummySelectorViewModel } from './dummy-selector-view-model.model.guard';
export { isDummyViewModel } from './dummy-view-model.model.guard';
export { isProjectTypeViewModel } from './project-type-view-model.model.guard';


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

export function isDate(arg: any): arg is Date {
  return arg != null && typeof arg.toISOString === 'function';
}
