/* tslint:disable */
import {
  Value,
} from './..';

/**
 * The result of applying a write.
 */
export interface WriteResult {
  transformResults: Value[];  // The results of applying each DocumentTransform.FieldTransform, in thesame order.
  updateTime: string;  // The last update time of the document after applying the write. Not setafter a `delete`.If the write did not actually change the document, this will be theprevious update_time.
}
