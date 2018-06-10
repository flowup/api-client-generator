/* tslint:disable */

/**
 * A selection of a collection, such as `messages as m1`.
 */
export interface CollectionSelector {
  allDescendants: boolean;  // When false, selects only collections that are immediate children ofthe `parent` specified in the containing `RunQueryRequest`.When true, selects all descendant collections.
  collectionId: string;  // The collection ID.When set, selects only collections with this ID.
}
