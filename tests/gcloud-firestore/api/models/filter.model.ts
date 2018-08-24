/* tslint:disable */
import {
  CompositeFilter,
  FieldFilter,
  UnaryFilter,
} from '.';

/**
 * A filter.
 */
export interface Filter {
  compositeFilter: CompositeFilter;  // A composite filter.
  fieldFilter: FieldFilter;  // A filter on a document field.
  unaryFilter: UnaryFilter;  // A filter that takes exactly one argument.
}
