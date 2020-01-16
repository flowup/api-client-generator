/* tslint:disable */
import {
  AssetPatch,
} from '../models';

export function isAssetPatch(arg: any): arg is AssetPatch {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // label?: string
    ( typeof arg.label === 'undefined' || typeof arg.label === 'string' ) &&
  // name: string
    ( typeof arg.name === 'string' ) &&

    true
  );
}

