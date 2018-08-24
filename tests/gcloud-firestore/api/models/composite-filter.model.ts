/* tslint:disable */
import {
  Filter,
} from '.';

/**
 * A filter that merges multiple other filters using the given operator.
 */
export interface CompositeFilter {
  filters: Filter[];  // The list of filters to combine.Must contain at least one filter.
  op: string;  // The operator for combining multiple filters.
}
