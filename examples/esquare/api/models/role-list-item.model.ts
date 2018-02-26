/* tslint:disable */
import {
  RoleStatus,
} from './..';

export interface RoleListItem {
  id: number;
  name: string;
  privileges: string;
  status: RoleStatus;
}
