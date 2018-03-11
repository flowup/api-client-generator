/* tslint:disable */
import {
  Write,
} from './..';

export interface WriteRequest {
  labels: any;
  streamId: string;
  streamToken: string;
  writes: Write[];
}
