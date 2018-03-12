/* tslint:disable */
import {
  CompositeFilter,
  FieldFilter,
  UnaryFilter,
} from './..';

export interface Filter {
  compositeFilter: CompositeFilter;
  fieldFilter: FieldFilter;
  unaryFilter: UnaryFilter;
}
