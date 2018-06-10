/* tslint:disable */
import {
  FieldTransform,
} from './..';

/**
 * A transformation of a document.
 */
export interface DocumentTransform {
  document: string;  // The name of the document to transform.
  fieldTransforms: FieldTransform[];  // The list of transformations to apply to the fields of the document, inorder.This must not be empty.
}
