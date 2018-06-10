/* tslint:disable */
import {
  ArrayValue,
  LatLng,
  MapValue,
} from './..';

/**
 * A message that can hold any of the supported value types.
 */
export interface Value {
  arrayValue: ArrayValue;  // An array value.Cannot contain another array value.
  booleanValue: boolean;  // A boolean value.
  bytesValue: string;  // A bytes value.Must not exceed 1 MiB - 89 bytes.Only the first 1,500 bytes are considered by queries.
  doubleValue: number;  // A double value.
  geoPointValue: LatLng;  // A geo point value representing a point on the surface of Earth.
  integerValue: string;  // An integer value.
  mapValue: MapValue;  // A map value.
  nullValue: string;  // A null value.
  referenceValue: string;  // A reference to a document. For example:`projects/{project_id}/databases/{database_id}/documents/{document_path}`.
  stringValue: string;  // A string value.The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.Only the first 1,500 bytes of the UTF-8 representation are considered byqueries.
  timestampValue: string;  // A timestamp value.Precise only to microseconds. When stored, any additional precision isrounded down.
}
