/* tslint:disable */
import {
  FieldReference,
  Value,
} from '.';

/**
 * A filter on a specific field.
 */
export interface FieldFilter {
  field: FieldReference;  // The field to filter by.
  op: string;  // The operator to filter by.
  value: Value;  // The value to compare to.
}
