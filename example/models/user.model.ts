import {
  UserRole,
} from './..';

export interface User {
  alias: string;
  avatar: string;
  email: string;
  id: string;
  name: string;
  password: string;
  phone: string;
  secondEmail: string;
  userRole: UserRole;
}
