import { calendarEventType } from './calendareventtype.model'
import { calendarEventSharing } from './calendareventsharing.model'

export interface calendarEvent {
  id: string;
  dateStart: string;
  dateEnd: string;
  allDay: boolean;
  repeating: boolean;
  repeatingTime: string;
  place: string;
  rider: string;
  comment: string;
  horseID: string;
  eventType: calendarEventType;
  sharings: calendarEventSharing[];
}
