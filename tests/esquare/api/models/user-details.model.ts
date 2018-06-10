/* tslint:disable */
import {
  UserStatus,
} from './..';

export interface UserDetails {
  email: string;
  entities: number[];
  firstName: string;
  id: number;
  imageData: string;  // base64 user uploaded image string
  imageUrl: string;  // url to user avatar image
  lastName: string;
  login: string;
  phone: string;
  roleId: number;
  status: UserStatus;
  title: string;
}
