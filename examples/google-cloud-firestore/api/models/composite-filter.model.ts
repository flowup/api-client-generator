/* tslint:disable */
import {
  Filter,
} from './..';

export interface CompositeFilter {
  filters: Filter[];
  op: string;
}
