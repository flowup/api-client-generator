/* tslint:disable */
import {
  UserStatus,
} from './..';

export interface UserDetails {
  email: string;
  entities: number[];
  firstName: string;
  id: number;
  imageData: string;
  imageUrl: string;
  lastName: string;
  login: string;
  phone: string;
  roleId: number;
  status: UserStatus;
  title: string;
}
