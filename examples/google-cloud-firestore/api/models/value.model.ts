/* tslint:disable */
import {
  ArrayValue,
  LatLng,
  MapValue,
} from './..';

export interface Value {
  arrayValue: ArrayValue;
  booleanValue: boolean;
  bytesValue: string;
  doubleValue: number;
  geoPointValue: LatLng;
  integerValue: string;
  mapValue: MapValue;
  nullValue: string;
  referenceValue: string;
  stringValue: string;
  timestampValue: string;
}
