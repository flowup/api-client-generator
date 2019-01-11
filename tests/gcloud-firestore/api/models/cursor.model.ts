/* tslint:disable */
import {
  Value,
} from '.';

/**
 * A position in a query result set.
 */
export interface Cursor {
  before?: boolean;  // If the position is just before or just after the given values, relativeto the sort order defined by the query.
  values?: Value[];  // The values that represent a position, in the order they appear inthe order by clause of a query.Can contain fewer values than specified in the order by clause.
}
