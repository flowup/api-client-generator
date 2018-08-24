/* tslint:disable */
import {
  Status,
} from '.';

export interface ReportTemplate {
  id: number;
  issues: number;
  sampleFileUrl: string;
  status: Status;
  subtitle: string;
  title: string;
}
