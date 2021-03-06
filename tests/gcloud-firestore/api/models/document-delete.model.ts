/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */


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
  /** The resource name of the Document that was deleted. */
  document?: string;
  /**
   * The read timestamp at which the delete was observed.
   * 
   * Greater or equal to the `commit_time` of the delete.
   */
  readTime?: string;
  /** A set of target IDs for targets that previously matched this entity. */
  removedTargetIds?: number[];
}
