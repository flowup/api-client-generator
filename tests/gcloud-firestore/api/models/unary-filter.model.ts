/* tslint:disable */
import {
  FieldReference,
} from '.';

/**
 * A filter with a single operand.
 */
export interface UnaryFilter {
  field: FieldReference;  // The field to which to apply the operator.
  op: string;  // The unary operator to apply.
}
