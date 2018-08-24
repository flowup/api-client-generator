/* tslint:disable */
import {
  Index,
} from '.';

/**
 * The response for FirestoreAdmin.ListIndexes.
 */
export interface ListIndexesResponse {
  indexes: Index[];  // The indexes.
  nextPageToken: string;  // The standard List next-page token.
}
