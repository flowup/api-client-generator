import { calendarEventSharingRole } from './calendareventsharingrole.model'

export interface calendarEventSharing {
  id: string;
  eventId: string;
  userID: string;
  role: calendarEventSharingRole;
}
