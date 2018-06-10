/* tslint:disable */

/**
 * The response from Firestore.ListCollectionIds.
 */
export interface ListCollectionIdsResponse {
  collectionIds: string[];  // The collection ids.
  nextPageToken: string;  // A page token that may be used to continue the list.
}
