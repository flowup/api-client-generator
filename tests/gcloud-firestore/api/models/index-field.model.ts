/* tslint:disable */

/**
 * A field of an index.
 */
export interface IndexField {
  fieldPath: string;  // The path of the field. Must match the field path specification describedby google.firestore.v1beta1.Document.fields.Special field path `__name__` may be used by itself or at the end of apath. `__type__` may be used only at the end of path.
  mode: string;  // The field's mode.
}
