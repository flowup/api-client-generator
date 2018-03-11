/* tslint:disable */
import {
  Write,
} from './..';

export interface CommitRequest {
  transaction: string;
  writes: Write[];
}
