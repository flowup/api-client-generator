/* tslint:disable */
import {
  StatusSeverity,
} from '.';

export interface WidgetTypeViewModel {
  Beschreibung?: string;
  Id?: number;
  KeySystem?: { [key: string]: string };
  ModulName?: string;
  ModulNameExtern?: string;
  Order?: number;
  OrganizerTaskId?: number;
  RefSystem?: { [key: string]: string };
  Severity?: StatusSeverity;
  SysApplicationId?: number;
  Titel?: string;
}
