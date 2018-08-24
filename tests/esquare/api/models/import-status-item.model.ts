/* tslint:disable */
import {
  Criticality,
  ImportStatusDetailsItem,
} from '.';

export interface ImportStatusItem {
  criticality: Criticality;
  details: ImportStatusDetailsItem[];
  dueDate: string;
  id: number;
  issues: number;
  progress: number;
  title: string;
}
