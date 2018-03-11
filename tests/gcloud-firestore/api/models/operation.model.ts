/* tslint:disable */
import {
  Status,
} from './..';

export interface Operation {
  done: boolean;
  error: Status;
  metadata: any;
  name: string;
  response: any;
}
