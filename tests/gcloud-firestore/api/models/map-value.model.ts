/* tslint:disable */
import {
  Value,
} from '.';

/**
 * A map value.
 */
export interface MapValue {
  fields: { [key: string]: Value };  // The map's fields.The map keys represent field names. Field names matching the regularexpression `__.*__` are reserved. Reserved field names are forbidden exceptin certain documented contexts. The map keys, represented as UTF-8, mustnot exceed 1,500 bytes and cannot be empty.
}
