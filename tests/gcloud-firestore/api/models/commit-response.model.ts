/* tslint:disable */
import {
  WriteResult,
} from '.';

/**
 * The response for Firestore.Commit.
 */
export interface CommitResponse {
  commitTime?: string;  // The time at which the commit occurred.
  writeResults?: WriteResult[];  // The result of applying the writes.This i-th write result corresponds to the i-th write in therequest.
}
