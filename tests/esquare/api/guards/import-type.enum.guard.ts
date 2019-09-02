/* tslint:disable */
  import {
  ImportType,
  } from '../models';

export function isImportType(arg: any): arg is ImportType {
  return false
   || arg === ImportType.ThirdParty
   || arg === ImportType.File
  ;
}
