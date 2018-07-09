/* tslint:disable */
import {
  WidgetModel,
} from './..';

export interface ColumnModel {
  Children: WidgetModel[];
  Id: number;
  ParentId: number;
  Position: number;
  Width: number;
}
