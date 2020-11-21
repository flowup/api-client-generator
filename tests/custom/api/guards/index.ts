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
    ( Object.values(arg).every((value: unknown) => isDictionaryItem(value)) ) &&

  true
  );
  }

export function isDictionaryItem(arg: any): arg is models.DictionaryItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // [key: string]: number
    ( Object.values(arg).every((value: unknown) => typeof value === 'number') ) &&

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

export function isInterfaceWithArrayOfDictionariesOfArrayOfRights(arg: any): arg is models.InterfaceWithArrayOfDictionariesOfArrayOfRights {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // foo?: { [key: string]: Right[] }[]
    ( typeof arg.foo === 'undefined' || Object.values(arg.foo).every((value: unknown) => (Array.isArray(value) && value.every((item: unknown) => (Array.isArray(item) && item.every((itemItem: unknown) => isRight(itemItem)))))) ) &&

  true
  );
  }

export function isInterfaceWithArrayOfDictionariesOfNumbers(arg: any): arg is models.InterfaceWithArrayOfDictionariesOfNumbers {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // arrayOfDicsOfNumbers: { [key: string]: number }[]
    ( Object.values(arg.arrayOfDicsOfNumbers).every((value: unknown) => (Array.isArray(value) && value.every((item: unknown) => typeof item === 'number'))) ) &&

  true
  );
  }

export function isInterfaceWithArrayOfDictionariesOfRights(arg: any): arg is models.InterfaceWithArrayOfDictionariesOfRights {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // foo?: { [key: string]: Right }[]
    ( typeof arg.foo === 'undefined' || Object.values(arg.foo).every((value: unknown) => (Array.isArray(value) && value.every((item: unknown) => isRight(item)))) ) &&

  true
  );
  }

export function isInterfaceWithDictionary(arg: any): arg is models.InterfaceWithDictionary {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // customers?: { [key: string]: Customer }
    ( typeof arg.customers === 'undefined' || Object.values(arg.customers).every((value: unknown) => isCustomer(value)) ) &&
    // id: string
    ( typeof arg.id === 'string' ) &&

  true
  );
  }

export function isInterfaceWithDictionaryOfArraysOfNumbers(arg: any): arg is models.InterfaceWithDictionaryOfArraysOfNumbers {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // dicOfNumberArrays: { [key: string]: number[] }
    ( Object.values(arg.dicOfNumberArrays).every((value: unknown) => typeof value === 'number') ) &&

  true
  );
  }

export function isInterfaceWithSimpleDictionary(arg: any): arg is models.InterfaceWithSimpleDictionary {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // foo: { [key: string]: number }
    ( Object.values(arg.foo).every((value: unknown) => typeof value === 'number') ) &&

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
    ( typeof arg.myMap === 'undefined' || Object.values(arg.myMap).every((value: unknown) => isData(value)) ) &&
    // myName?: string
    ( typeof arg.myName === 'undefined' || typeof arg.myName === 'string' ) &&

  true
  );
  }

export function isPageData(arg: any): arg is models.PageData {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // appliedIf?: PageDataRules
    ( typeof arg.appliedIf === 'undefined' || isPageDataRules(arg.appliedIf) ) &&

  true
  );
  }

export function isPageDataRules(arg: any): arg is models.PageDataRules {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // [key: string]: string[]
    ( Object.values(arg).every((value: unknown) => (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string'))) ) &&

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

export function isPosition(arg: any): arg is models.Position {
  return arg != null
   || arg === models.Position.First
   || arg === models.Position.Second
   || arg === models.Position.Third
  ;
  }

export function isRight(arg: any): arg is models.Right {
  return arg != null
   || arg === models.Right.MEMBER
   || arg === models.Right.ADMIN
   || arg === models.Right.VIEW_ALL
   || arg === models.Right.VIEW_MY
   || arg === models.Right.VIEW_EDIT
   || arg === models.Right.READ_WRITE
   || arg === models.Right.CONTROL
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

export function isV1ContentModelArray(arg: any): arg is models.V1ContentModelArray {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // itemSchema?: V1ContentModelElement
    ( typeof arg.itemSchema === 'undefined' || isV1ContentModelElement(arg.itemSchema) ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&

  true
  );
  }

export function isV1ContentModelBool(arg: any): arg is models.V1ContentModelBool {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // default?: boolean
    ( typeof arg.default === 'undefined' || typeof arg.default === 'boolean' ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&

  true
  );
  }

export function isV1ContentModelDouble(arg: any): arg is models.V1ContentModelDouble {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // default?: number
    ( typeof arg.default === 'undefined' || typeof arg.default === 'number' ) &&
    // enum?: number[]
    ( typeof arg.enum === 'undefined' || (Array.isArray(arg.enum) && arg.enum.every((item: unknown) => typeof item === 'number')) ) &&
    // maximum?: number
    ( typeof arg.maximum === 'undefined' || typeof arg.maximum === 'number' ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&
    // minimum?: number
    ( typeof arg.minimum === 'undefined' || typeof arg.minimum === 'number' ) &&

  true
  );
  }

export function isV1ContentModelElement(arg: any): arg is models.V1ContentModelElement {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // array?: V1ContentModelArray
    ( typeof arg.array === 'undefined' || isV1ContentModelArray(arg.array) ) &&
    // bool?: V1ContentModelBool
    ( typeof arg.bool === 'undefined' || isV1ContentModelBool(arg.bool) ) &&
    // double?: V1ContentModelDouble
    ( typeof arg.double === 'undefined' || isV1ContentModelDouble(arg.double) ) &&
    // int?: V1ContentModelInteger
    ( typeof arg.int === 'undefined' || isV1ContentModelInteger(arg.int) ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&
    // object?: V1ContentModelObject
    ( typeof arg.object === 'undefined' || isV1ContentModelObject(arg.object) ) &&
    // string?: V1ContentModelString
    ( typeof arg.string === 'undefined' || isV1ContentModelString(arg.string) ) &&

  true
  );
  }

export function isV1ContentModelField(arg: any): arg is models.V1ContentModelField {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // array?: V1ContentModelArray
    ( typeof arg.array === 'undefined' || isV1ContentModelArray(arg.array) ) &&
    // bool?: V1ContentModelBool
    ( typeof arg.bool === 'undefined' || isV1ContentModelBool(arg.bool) ) &&
    // double?: V1ContentModelDouble
    ( typeof arg.double === 'undefined' || isV1ContentModelDouble(arg.double) ) &&
    // int?: V1ContentModelInteger
    ( typeof arg.int === 'undefined' || isV1ContentModelInteger(arg.int) ) &&
    // key?: string
    ( typeof arg.key === 'undefined' || typeof arg.key === 'string' ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&
    // object?: V1ContentModelObject
    ( typeof arg.object === 'undefined' || isV1ContentModelObject(arg.object) ) &&
    // string?: V1ContentModelString
    ( typeof arg.string === 'undefined' || isV1ContentModelString(arg.string) ) &&

  true
  );
  }

export function isV1ContentModelInteger(arg: any): arg is models.V1ContentModelInteger {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // default?: string
    ( typeof arg.default === 'undefined' || typeof arg.default === 'string' ) &&
    // enum?: string[]
    ( typeof arg.enum === 'undefined' || (Array.isArray(arg.enum) && arg.enum.every((item: unknown) => typeof item === 'string')) ) &&
    // maximum?: string
    ( typeof arg.maximum === 'undefined' || typeof arg.maximum === 'string' ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&
    // minimum?: string
    ( typeof arg.minimum === 'undefined' || typeof arg.minimum === 'string' ) &&

  true
  );
  }

export function isV1ContentModelMetaInfo(arg: any): arg is models.V1ContentModelMetaInfo {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // comment?: string
    ( typeof arg.comment === 'undefined' || typeof arg.comment === 'string' ) &&
    // customId?: string
    ( typeof arg.customId === 'undefined' || typeof arg.customId === 'string' ) &&
    // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
    // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

  true
  );
  }

export function isV1ContentModelObject(arg: any): arg is models.V1ContentModelObject {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // fields?: V1ContentModelField[]
    ( typeof arg.fields === 'undefined' || (Array.isArray(arg.fields) && arg.fields.every((item: unknown) => isV1ContentModelField(item))) ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&

  true
  );
  }

export function isV1ContentModelString(arg: any): arg is models.V1ContentModelString {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // default?: string
    ( typeof arg.default === 'undefined' || typeof arg.default === 'string' ) &&
    // enum?: string[]
    ( typeof arg.enum === 'undefined' || (Array.isArray(arg.enum) && arg.enum.every((item: unknown) => typeof item === 'string')) ) &&
    // meta?: V1ContentModelMetaInfo
    ( typeof arg.meta === 'undefined' || isV1ContentModelMetaInfo(arg.meta) ) &&
    // regex?: string
    ( typeof arg.regex === 'undefined' || typeof arg.regex === 'string' ) &&

  true
  );
  }

export function isV1ContentModelVersion(arg: any): arg is models.V1ContentModelVersion {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // contentModelId?: string
    ( typeof arg.contentModelId === 'undefined' || typeof arg.contentModelId === 'string' ) &&
    // contentModelVersionId?: string
    ( typeof arg.contentModelVersionId === 'undefined' || typeof arg.contentModelVersionId === 'string' ) &&
    // createdAt?: string
    ( typeof arg.createdAt === 'undefined' || typeof arg.createdAt === 'string' ) &&
    // nextVersionId?: string
    ( typeof arg.nextVersionId === 'undefined' || typeof arg.nextVersionId === 'string' ) &&
    // previousVersionId?: string
    ( typeof arg.previousVersionId === 'undefined' || typeof arg.previousVersionId === 'string' ) &&
    // schema?: V1ContentModelObject
    ( typeof arg.schema === 'undefined' || isV1ContentModelObject(arg.schema) ) &&

  true
  );
  }

export function isV1ContentModelVersionList(arg: any): arg is models.V1ContentModelVersionList {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // versions?: V1ContentModelVersion[]
    ( typeof arg.versions === 'undefined' || (Array.isArray(arg.versions) && arg.versions.every((item: unknown) => isV1ContentModelVersion(item))) ) &&

  true
  );
  }


