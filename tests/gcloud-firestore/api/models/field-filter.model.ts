/* tslint:disable */
import {
  FieldReference,
  Value,
} from '.';

/**
 * A filter on a specific field.
 */
export interface FieldFilter {
  field?: FieldReference;  // The field to filter by.
  op?: 'OPERATOR_UNSPECIFIED' | 'LESS_THAN' | 'LESS_THAN_OR_EQUAL' | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUAL' | 'EQUAL';  // The operator to filter by.
  value?: Value;  // The value to compare to.
}
