import { horseHorseSharingRole } from './horsehorsesharingrole.model'

export interface horseHorseSharingRequest {
  email: string;
  horseID: string;
  horseSharingRole: horseHorseSharingRole;
}
