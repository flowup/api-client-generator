/* tslint:disable */
import {
  Write,
} from '.';

/**
 * The request for Firestore.Commit.
 */
export interface CommitRequest {
  transaction?: string;  // If set, applies all writes in this transaction, and commits it.
  writes?: Write[];  // The writes to apply.Always executed atomically and in order.
}
