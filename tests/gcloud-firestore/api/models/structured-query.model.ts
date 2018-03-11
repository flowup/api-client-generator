/* tslint:disable */
import {
  CollectionSelector,
  Cursor,
  Filter,
  Order,
  Projection,
} from './..';

export interface StructuredQuery {
  endAt: Cursor;
  from: CollectionSelector[];
  limit: number;
  offset: number;
  orderBy: Order[];
  select: Projection;
  startAt: Cursor;
  where: Filter;
}
