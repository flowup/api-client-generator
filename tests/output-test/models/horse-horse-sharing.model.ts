import { horseHorseSharingRole } from './horsehorsesharingrole.model'

export interface horseHorseSharing {
  id: string;
  horseID: string;
  userID: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: horseHorseSharingRole;
}
