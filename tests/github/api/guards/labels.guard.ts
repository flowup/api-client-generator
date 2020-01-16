/* tslint:disable */
import {
  Labels,
} from '../models';

export function isLabels(arg: any): arg is Labels {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

