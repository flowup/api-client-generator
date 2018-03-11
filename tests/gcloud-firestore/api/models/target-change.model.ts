/* tslint:disable */
import {
  Status,
} from './..';

export interface TargetChange {
  cause: Status;
  readTime: string;
  resumeToken: string;
  targetChangeType: string;
  targetIds: number[];
}
