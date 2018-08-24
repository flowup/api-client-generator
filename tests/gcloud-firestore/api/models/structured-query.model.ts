/* tslint:disable */
import {
  CollectionSelector,
  Cursor,
  Filter,
  Order,
  Projection,
} from '.';

/**
 * A Firestore query.
 */
export interface StructuredQuery {
  endAt: Cursor;  // A end point for the query results.
  from: CollectionSelector[];  // The collections to query.
  limit: number;  // The maximum number of results to return.Applies after all other constraints.Must be >= 0 if specified.
  offset: number;  // The number of results to skip.Applies before limit, but after all other constraints. Must be >= 0 ifspecified.
  orderBy: Order[];  // The order to apply to the query results.Firestore guarantees a stable ordering through the following rules: * Any field required to appear in `order_by`, that is not already   specified in `order_by`, is appended to the order in field nameorder   by default. * If an order on `__name__` is not specified, it is appended bydefault.Fields are appended with the same sort direction as the last orderspecified, or 'ASCENDING' if no order was specified. For example: * `SELECT * FROM Foo ORDER BY A` becomes   `SELECT * FROM Foo ORDER BY A, __name__` * `SELECT * FROM Foo ORDER BY A DESC` becomes   `SELECT * FROM Foo ORDER BY A DESC, __name__ DESC` * `SELECT * FROM Foo WHERE A > 1` becomes   `SELECT * FROM Foo WHERE A > 1 ORDER BY A, __name__`
  select: Projection;  // The projection to return.
  startAt: Cursor;  // A starting point for the query results.
  where: Filter;  // The filter to apply.
}
