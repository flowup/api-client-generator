/* tslint:disable */
import {
  ImportType,
  Status,
} from '.';

export interface ImportHistoryItem {
  datetime?: string;
  details?: string;
  filename?: string;
  status?: Status;
  type?: ImportType;
  user?: string;
}
