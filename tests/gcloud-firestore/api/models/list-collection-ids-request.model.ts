/* tslint:disable */

/**
 * The request for Firestore.ListCollectionIds.
 */
export interface ListCollectionIdsRequest {
  pageSize: number;  // The maximum number of results to return.
  pageToken: string;  // A page token. Must be a value fromListCollectionIdsResponse.
}
