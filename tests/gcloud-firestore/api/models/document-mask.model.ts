/* tslint:disable */

/**
 * A set of field paths on a document.
 * Used to restrict a get or update operation on a document to a subset of its
 * fields.
 * This is different from standard field masks, as this is always scoped to a
 * Document, and takes in account the dynamic nature of Value.
 */
export interface DocumentMask {
  fieldPaths?: string[];  // The list of field paths in the mask. See Document.fields for a fieldpath syntax reference.
}
