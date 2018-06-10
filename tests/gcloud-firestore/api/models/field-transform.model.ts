/* tslint:disable */

/**
 * A transformation of a field of the document.
 */
export interface FieldTransform {
  fieldPath: string;  // The path of the field. See Document.fields for the field path syntaxreference.
  setToServerValue: string;  // Sets the field to the given server value.
}
