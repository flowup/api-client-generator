/* tslint:disable */

export { isCat } from './cat.model.guard';
export { isCustomer } from './customer.model.guard';
export { isData } from './data.model.guard';
export { isDataModel } from './data-model.model.guard';
export { isDictionary } from './dictionary.model.guard';
export { isDictionaryItem } from './dictionary-item.model.guard';
export { isDog } from './dog.model.guard';
export { isItemList } from './item-list.model.guard';
export { isItemModelList } from './item-model-list.model.guard';
export { isModel } from './model.model.guard';
export { isMouse } from './mouse.model.guard';
export { isMyInterface } from './my-interface.model.guard';
export { isPet } from './pet.model.guard';
export { isPossition } from './possition.enum.guard';
export { isRight } from './right.enum.guard';
export { isTestModel } from './test-model.model.guard';


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
