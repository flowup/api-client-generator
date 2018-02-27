/* tslint:disable */
import {
  Criticality,
  Status,
} from './..';

export interface ReportListItem {
  criticality: Criticality;
  deadline: string;
  description: string;
  id: number;
  issues: number;
  status: Status;
  subtitle: string;
  title: string;
}
