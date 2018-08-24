/* tslint:disable */
import {
  Order,
  Table,
} from '.';

export interface OrderableTable extends Table {
  order: Order;
  orderBy: number;  // column id
}
