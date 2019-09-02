/* tslint:disable */
import {
  Value,
} from '../models';
import {
  isArrayValue,
  isLatLng,
  isMapValue,
} from '.';

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
  // nullValue?: string
    ( typeof arg.nullValue === 'undefined' || typeof arg.nullValue === 'string' ) &&
  // referenceValue?: string
    ( typeof arg.referenceValue === 'undefined' || typeof arg.referenceValue === 'string' ) &&
  // stringValue?: string
    ( typeof arg.stringValue === 'undefined' || typeof arg.stringValue === 'string' ) &&
  // timestampValue?: string
    ( typeof arg.timestampValue === 'undefined' || typeof arg.timestampValue === 'string' ) &&

    true
  );
}

