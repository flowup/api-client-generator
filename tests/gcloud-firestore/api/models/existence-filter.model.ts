/* tslint:disable */

/**
 * A digest of all the documents that match a given target.
 */
export interface ExistenceFilter {
  count?: number;  // The total count of documents that match target_id.If different from the count of documents in the client that match, theclient must manually determine which documents no longer match the target.
  targetId?: number;  // The target ID to which this filter applies.
}
