/* tslint:disable */
import {
  V1ContentModelArray,
  V1ContentModelBool,
  V1ContentModelDouble,
  V1ContentModelInteger,
  V1ContentModelMetaInfo,
  V1ContentModelObject,
  V1ContentModelString,
} from '.';

export interface V1ContentModelElement {
  array?: V1ContentModelArray;
  bool?: V1ContentModelBool;
  double?: V1ContentModelDouble;
  int?: V1ContentModelInteger;
  meta?: V1ContentModelMetaInfo;
  object?: V1ContentModelObject;
  string?: V1ContentModelString;
}
