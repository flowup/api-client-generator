import { horseHorseSharing } from './horsehorsesharing.model'
import { horsePaging } from './horsepaging.model'

export interface horseHorseSharingList {
  data: horseHorseSharing[];
  paging: horsePaging;
}
