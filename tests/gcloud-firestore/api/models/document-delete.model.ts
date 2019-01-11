/* tslint:disable */

/**
 * A Document has been deleted.
 * 
 * May be the result of multiple writes, including updates, the
 * last of which deleted the Document.
 * 
 * Multiple DocumentDelete messages may be returned for the same logical
 * delete, if multiple targets are affected.
 */
export interface DocumentDelete {
  document?: string;  // The resource name of the Document that was deleted.
  readTime?: string;  // The read timestamp at which the delete was observed.Greater or equal to the `commit_time` of the delete.
  removedTargetIds?: number[];  // A set of target IDs for targets that previously matched this entity.
}
