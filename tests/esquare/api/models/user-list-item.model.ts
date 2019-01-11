/* tslint:disable */
import {
  UserStatus,
} from '.';

export interface UserListItem {
  entityIds?: number[];
  id?: number;
  name?: string;
  roleId?: number;
  status?: UserStatus;
}
