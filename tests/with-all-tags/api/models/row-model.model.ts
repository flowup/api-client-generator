/* tslint:disable */
import {
  ColumnModel,
} from '.';

export interface RowModel {
  Children: ColumnModel[];
  Id: number;
  ParentId: number;
  Position: number;
  UserId: number;
}
