/* tslint:disable */
import {
  ReportListItem,
  ReportTemplateGroup,
} from '.';

export interface ReportItem extends ReportListItem {
  description?: string;
  groups?: ReportTemplateGroup[];
  progress?: number;
}
