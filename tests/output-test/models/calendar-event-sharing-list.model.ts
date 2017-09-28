import { calendarEventSharing } from './calendareventsharing.model'
import { calendarPaging } from './calendarpaging.model'

export interface calendarEventSharingList {
  data: calendarEventSharing[];
  paging: calendarPaging;
}
