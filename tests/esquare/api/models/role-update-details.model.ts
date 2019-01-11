/* tslint:disable */
import {
  RoleStatus,
} from '.';

export interface RoleUpdateDetails {
  privilegesToAssing?: number[];
  privilegesToUnassing?: number[];
  status?: RoleStatus;
  usersToAssing?: number[];
  usersToUnassing?: number[];
}
