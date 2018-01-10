import {
  User,
} from './..';

export interface UserList {
  data: User[];
  limit: number;
  offset: number;
  totalCount: number;
}
