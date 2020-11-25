/* tslint:disable */

/**
 * A transformation of a field of the document.
 */
export interface FieldTransform {
  fieldPath?: string;  // The path of the field. See Document.fields for the field path syntaxreference.
  setToServerValue?: ('SERVER_VALUE_UNSPECIFIED' | 'REQUEST_TIME');  // Sets the field to the given server value.
}
