/* tslint:disable */
import {
  FieldReference,
  Value,
} from './..';

export interface FieldFilter {
  field: FieldReference;
  op: string;
  value: Value;
}
