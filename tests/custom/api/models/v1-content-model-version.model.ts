/* tslint:disable */
import {
  V1ContentModelObject,
} from '.';

export interface V1ContentModelVersion {
  contentModelId?: string;
  contentModelVersionId?: string;
  createdAt?: string;
  nextVersionId?: string;
  previousVersionId?: string;
  schema?: V1ContentModelObject;
}
