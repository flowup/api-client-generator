/* tslint:disable */
import {
  RoleStatus,
} from './..';

export interface RoleDetailsItem {
  id: number;
  name: string;
  privileges: number[];
  status: RoleStatus;
  users: number[];
}
