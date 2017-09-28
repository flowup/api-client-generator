import { horseActivity } from './horseactivity.model'
import { horsePaging } from './horsepaging.model'

export interface horseActivityList {
  data: horseActivity[];
  paging: horsePaging;
}
