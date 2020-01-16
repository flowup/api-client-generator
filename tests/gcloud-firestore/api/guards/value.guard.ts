/* tslint:disable */
import {
  Value,
} from '../models';
import { isArrayValue } from './array-value.guard';
import { isLatLng } from './lat-lng.guard';
import { isMapValue } from './map-value.guard';

export function isValue(arg: any): arg is Value {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // arrayValue?: ArrayValue
    ( typeof arg.arrayValue === 'undefined' || isArrayValue(arg.arrayValue) ) &&
  // booleanValue?: boolean
    ( typeof arg.booleanValue === 'undefined' || typeof arg.booleanValue === 'boolean' ) &&
  // bytesValue?: string
    ( typeof arg.bytesValue === 'undefined' || typeof arg.bytesValue === 'string' ) &&
  // doubleValue?: number
    ( typeof arg.doubleValue === 'undefined' || typeof arg.doubleValue === 'number' ) &&
  // geoPointValue?: LatLng
    ( typeof arg.geoPointValue === 'undefined' || isLatLng(arg.geoPointValue) ) &&
  // integerValue?: string
    ( typeof arg.integerValue === 'undefined' || typeof arg.integerValue === 'string' ) &&
  // mapValue?: MapValue
    ( typeof arg.mapValue === 'undefined' || isMapValue(arg.mapValue) ) &&
  // nullValue?: 'NULL_VALUE'
    ( typeof arg.nullValue === 'undefined' || is'NULL_VALUE'(arg.nullValue) ) &&
  // referenceValue?: string
    ( typeof arg.referenceValue === 'undefined' || typeof arg.referenceValue === 'string' ) &&
  // stringValue?: string
    ( typeof arg.stringValue === 'undefined' || typeof arg.stringValue === 'string' ) &&
  // timestampValue?: string
    ( typeof arg.timestampValue === 'undefined' || typeof arg.timestampValue === 'string' ) &&

    true
  );
}

