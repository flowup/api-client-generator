/* tslint:disable */
import {
  Document,
} from '.';

/**
 * The response for Firestore.RunQuery.
 */
export interface RunQueryResponse {
  document?: Document;  // A query result.Not set when reporting partial progress.
  readTime?: string;  // The time at which the document was read. This may be monotonicallyincreasing; in this case, the previous documents in the result stream areguaranteed not to have changed between their `read_time` and this one.If the query returns no results, a response with `read_time` and no`document` will be sent, and this represents the time at which the querywas run.
  skippedResults?: number;  // The number of results that have been skipped due to an offset betweenthe last response and the current response.
  transaction?: string;  // The transaction that was started as part of this request.Can only be set in the first response, and only ifRunQueryRequest.new_transaction was set in the request.If set, no other fields will be set in this response.
}
