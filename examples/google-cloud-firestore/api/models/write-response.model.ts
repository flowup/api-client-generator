/* tslint:disable */
import {
  WriteResult,
} from './..';

export interface WriteResponse {
  commitTime: string;
  streamId: string;
  streamToken: string;
  writeResults: WriteResult[];
}
