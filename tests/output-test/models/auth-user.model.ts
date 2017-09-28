import { authUserRole } from './authuserrole.model'

export interface authUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  alias: string;
  state: string;
  userRole: authUserRole;
}
