/* tslint:disable */

/**
 * A Document has been removed from the view of the targets.
 * 
 * 
 * Sent if the document is no longer relevant to a target and is out of view.
 * Can be sent instead of a DocumentDelete or a DocumentChange if the server
 * can not send the new value of the document.
 * 
 * 
 * Multiple DocumentRemove messages may be returned for the same logical
 * write or delete, if multiple targets are affected.
 */
export interface DocumentRemove {
  document?: string;  // The resource name of the Document that has gone out of view.
  readTime?: string;  // The read timestamp at which the remove was observed.Greater or equal to the `commit_time` of the change/delete/remove.
  removedTargetIds?: number[];  // A set of target IDs for targets that previously matched this document.
}
