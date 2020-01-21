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

export function isCat(arg: any): arg is models.Cat {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // age?: number
    ( typeof arg.age === 'undefined' || typeof arg.age === 'number' ) &&
    // eaten?: Mouse[]
    ( typeof arg.eaten === 'undefined' || (Array.isArray(arg.eaten) && arg.eaten.every((item: unknown) => isMouse(item))) ) &&
    // hunts?: boolean
    ( typeof arg.hunts === 'undefined' || typeof arg.hunts === 'boolean' ) &&
    // extends Pet
    isPet(arg) &&

  true
  );
  }

export function isCustomer(arg: any): arg is models.Customer {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // address?: string
    ( typeof arg.address === 'undefined' || typeof arg.address === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // right?: Right
    ( typeof arg.right === 'undefined' || isRight(arg.right) ) &&
    // extends Model
    isModel(arg) &&

  true
  );
  }

export function isData(arg: any): arg is models.Data {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // firstName?: string
    ( typeof arg.firstName === 'undefined' || typeof arg.firstName === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // lastName?: string
    ( typeof arg.lastName === 'undefined' || typeof arg.lastName === 'string' ) &&
    // phone?: string
    ( typeof arg.phone === 'undefined' || typeof arg.phone === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isDataModel(arg: any): arg is models.DataModel {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // audioConfig?: Data
    ( typeof arg.audioConfig === 'undefined' || ( isData(arg.audioConfig) ) ) &&
    // entities?: number[]
    ( typeof arg.entities === 'undefined' || (Array.isArray(arg.entities) && arg.entities.every((item: unknown) => typeof item === 'number')) ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // imageData?: string
    ( typeof arg.imageData === 'undefined' || typeof arg.imageData === 'string' ) &&
    // imageUrl?: string
    ( typeof arg.imageUrl === 'undefined' || typeof arg.imageUrl === 'string' ) &&
    // roleId?: number
    ( typeof arg.roleId === 'undefined' || typeof arg.roleId === 'number' ) &&
    // testWithArray?: Pet[] & Data
    ( typeof arg.testWithArray === 'undefined' || ( (Array.isArray(arg.testWithArray) && arg.testWithArray.every((item: unknown) => isPet(item))) && isData(arg.testWithArray) ) ) &&
    // text?: ItemList & Data
    ( typeof arg.text === 'undefined' || ( isItemList(arg.text) && isData(arg.text) ) ) &&

  true
  );
  }

export function isDictionary(arg: any): arg is models.Dictionary {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // [key: string]: DictionaryItem
    ( Object.values(arg).every((item: unknown) => isDictionaryItem(item)) ) &&

  true
  );
  }

export function isDictionaryItem(arg: any): arg is models.DictionaryItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // [key: string]: number
    ( Object.values(arg).every((item: unknown) => typeof item === 'number') ) &&

  true
  );
  }

export function isDog(arg: any): arg is models.Dog {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // bark?: boolean
    ( typeof arg.bark === 'undefined' || typeof arg.bark === 'boolean' ) &&
    // breed?: 'Dingo' | 'Husky' | 'Retriever' | 'Shepherd'
    ( typeof arg.breed === 'undefined' || ['Dingo', 'Husky', 'Retriever', 'Shepherd'].includes(arg.breed) ) &&
    // extends Pet
    isPet(arg) &&

  true
  );
  }

export function isItemList(arg: any): arg is models.ItemList {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // data: Data[]
    ( (Array.isArray(arg.data) && arg.data.every((item: unknown) => isData(item))) ) &&

  true
  );
  }

export function isItemModelList(arg: any): arg is models.ItemModelList {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // data: DataModel[]
    ( (Array.isArray(arg.data) && arg.data.every((item: unknown) => isDataModel(item))) ) &&

  true
  );
  }

export function isModel(arg: any): arg is models.Model {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // created?: number
    ( typeof arg.created === 'undefined' || typeof arg.created === 'number' ) &&
    // deleted?: number
    ( typeof arg.deleted === 'undefined' || typeof arg.deleted === 'number' ) &&
    // id?: string
    ( typeof arg.id === 'undefined' || typeof arg.id === 'string' ) &&
    // recursivePointer?: Model
    ( typeof arg.recursivePointer === 'undefined' || isModel(arg.recursivePointer) ) &&
    // updated?: number
    ( typeof arg.updated === 'undefined' || typeof arg.updated === 'number' ) &&

  true
  );
  }

export function isMouse(arg: any): arg is models.Mouse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // color?: string
    ( typeof arg.color === 'undefined' || typeof arg.color === 'string' ) &&
    // extends Pet
    isPet(arg) &&

  true
  );
  }

export function isMyInterface(arg: any): arg is models.MyInterface {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // myId?: string
    ( typeof arg.myId === 'undefined' || typeof arg.myId === 'string' ) &&
    // myMap?: { [key: string]: Data }
    ( typeof arg.myMap === 'undefined' || isData(arg.myMap) ) &&
    // myName?: string
    ( typeof arg.myName === 'undefined' || typeof arg.myName === 'string' ) &&

  true
  );
  }

export function isPet(arg: any): arg is models.Pet {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // pet_type: string
    ( typeof arg.pet_type === 'string' ) &&

  true
  );
  }

  import {
  Possition,
  } from '../models';

  export function isPossition(arg: any): arg is Possition {
  return false
   || arg === Possition.First
   || arg === Possition.Second
   || arg === Possition.Third
  ;
  }

  import {
  Right,
  } from '../models';

  export function isRight(arg: any): arg is Right {
  return false
   || arg === Right.MEMBER
   || arg === Right.ADMIN
   || arg === Right.VIEW_ALL
   || arg === Right.VIEW_MY
   || arg === Right.VIEW_EDIT
   || arg === Right.READ_WRITE
   || arg === Right.CONTROL
  ;
  }

export function isTestModel(arg: any): arg is models.TestModel {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // '42test'?: string
    ( typeof arg['42test'] === 'undefined' || typeof arg['42test'] === 'string' ) &&
    // 'anotherKey@'?: string
    ( typeof arg['anotherKey@'] === 'undefined' || typeof arg['anotherKey@'] === 'string' ) &&
    // 'some-key'?: string
    ( typeof arg['some-key'] === 'undefined' || typeof arg['some-key'] === 'string' ) &&
    // 'yet@notherKey'?: string
    ( typeof arg['yet@notherKey'] === 'undefined' || typeof arg['yet@notherKey'] === 'string' ) &&
    // count?: number
    ( typeof arg.count === 'undefined' || typeof arg.count === 'number' ) &&

  true
  );
  }


