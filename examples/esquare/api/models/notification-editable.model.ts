/* tslint:disable */
import {
  Criticality,
  Frequency,
} from './..';

export interface NotificationEditable {
  description: string;
  frequency: Frequency;
  moduleId: number;
  name: string;
  priority: Criticality;
  triggerId: number;
}
