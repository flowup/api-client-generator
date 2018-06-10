/* tslint:disable */

/**
 * A precondition on a document, used for conditional operations.
 */
export interface Precondition {
  exists: boolean;  // When set to `true`, the target document must exist.When set to `false`, the target document must not exist.
  updateTime: string;  // When set, the target document must exist and have been last updated atthat time.
}
