/* tslint:disable */
import {
  ReportTemplateGroup,
} from './..';

export interface ReportItem {
  description: string;
  groups: ReportTemplateGroup[];
  progress: number;
}
