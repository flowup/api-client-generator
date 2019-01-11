/* tslint:disable */
import {
  Criticality,
} from '.';

export interface NotificationListItem {
  date?: string;
  description?: string;
  id?: number;
  name?: string;
  priority?: Criticality;
}
