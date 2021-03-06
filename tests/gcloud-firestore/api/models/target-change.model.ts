/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import {
  Status,
} from '.';

/**
 * Targets being watched have changed.
 */
export interface TargetChange {
  /** The error that resulted in this change, if applicable. */
  cause?: Status;
  /**
   * The consistent `read_time` for the given `target_ids` (omitted when the
   * target_ids are not at a consistent snapshot).
   * 
   * 
   * The stream is guaranteed to send a `read_time` with `target_ids` empty
   * whenever the entire stream reaches a new consistent snapshot. ADD,
   * CURRENT, and RESET messages are guaranteed to (eventually) result in a
   * new consistent snapshot (while NO_CHANGE and REMOVE messages are not).
   * 
   * 
   * For a given stream, `read_time` is guaranteed to be monotonically
   * increasing.
   */
  readTime?: string;
  /**
   * A token that can be used to resume the stream for the given `target_ids`,
   * or all targets if `target_ids` is empty.
   * 
   * 
   * Not set on every target change.
   */
  resumeToken?: string;
  /** The type of change that occurred. */
  targetChangeType?: ('NO_CHANGE' | 'ADD' | 'REMOVE' | 'CURRENT' | 'RESET');
  /**
   * The target IDs of targets that have changed.
   * 
   * 
   * If empty, the change applies to all targets.
   * 
   * 
   * For `target_change_type=ADD`, the order of the target IDs matches the order
   * of the requests to add the targets. This allows clients to unambiguously
   * associate server-assigned target IDs with added targets.
   * 
   * 
   * For other states, the order of the target IDs is not defined.
   */
  targetIds?: number[];
}
