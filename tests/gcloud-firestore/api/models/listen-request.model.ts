/* tslint:disable */
import {
  Target,
} from './..';

/**
 * A request for Firestore.Listen
 */
export interface ListenRequest {
  addTarget: Target;  // A target to add to this stream.
  labels: { [key: string]: string };  // Labels associated with this target change.
  removeTarget: number;  // The ID of a target to remove from this stream.
}
