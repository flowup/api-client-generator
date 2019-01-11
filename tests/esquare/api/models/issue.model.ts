/* tslint:disable */
import {
  IssueAlertType,
} from '.';

export interface Issue {
  alert?: IssueAlertType;
  description?: string;
  dueDate?: string;
  id?: number;
  name?: string;
  reportName?: string;
  rootCause?: string;
  school?: string;
}
