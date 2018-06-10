/* tslint:disable */
import {
  IndexField,
} from './..';

/**
 * An index definition.
 */
export interface Index {
  collectionId: string;  // The collection ID to which this index applies. Required.
  fields: IndexField[];  // The fields to index.
  name: string;  // The resource name of the index.Output only.
  state: string;  // The state of the index.Output only.
}
