import { horseHorse } from './horsehorse.model'
import { horsePaging } from './horsepaging.model'

export interface horseHorseList {
  data: horseHorse[];
  paging: horsePaging;
}
