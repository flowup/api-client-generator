/* tslint:disable */
import {
  Status,
} from './..';

/**
 * Targets being watched have changed.
 */
export interface TargetChange {
  cause: Status;  // The error that resulted in this change, if applicable.
  readTime: string;  // The consistent `read_time` for the given `target_ids` (omitted when thetarget_ids are not at a consistent snapshot).The stream is guaranteed to send a `read_time` with `target_ids` emptywhenever the entire stream reaches a new consistent snapshot. ADD,CURRENT, and RESET messages are guaranteed to (eventually) result in anew consistent snapshot (while NO_CHANGE and REMOVE messages are not).For a given stream, `read_time` is guaranteed to be monotonicallyincreasing.
  resumeToken: string;  // A token that can be used to resume the stream for the given `target_ids`,or all targets if `target_ids` is empty.Not set on every target change.
  targetChangeType: string;  // The type of change that occurred.
  targetIds: number[];  // The target IDs of targets that have changed.If empty, the change applies to all targets.For `target_change_type=ADD`, the order of the target IDs matches the orderof the requests to add the targets. This allows clients to unambiguouslyassociate server-assigned target IDs with added targets.For other states, the order of the target IDs is not defined.
}
