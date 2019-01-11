/* tslint:disable */
import {
  Model,
  Right,
} from '.';

export interface Customer extends Model {
  address?: string;
  name?: string;
  right?: Right;
}
