/* tslint:disable */
import {
  FieldReference,
} from '.';

/**
 * An order on a field.
 */
export interface Order {
  direction?: string;  // The direction to order by. Defaults to `ASCENDING`.
  field?: FieldReference;  // The field to order by.
}
