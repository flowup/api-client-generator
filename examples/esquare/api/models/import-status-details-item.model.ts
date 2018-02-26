/* tslint:disable */
import {
  Status,
} from './..';

export interface ImportStatusDetailsItem {
  id: number;
  issues: number;
  progress: number;
  status: Status;
  subtitle: string;
  title: string;
}
