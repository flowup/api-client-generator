/* tslint:disable */
import {
  FieldReference,
} from '.';

/**
 * The projection of document's fields to return.
 */
export interface Projection {
  fields: FieldReference[];  // The fields to return.If empty, all fields are returned. To only return the nameof the document, use `['__name__']`.
}
