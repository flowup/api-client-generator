/* tslint:disable */
import {
  RefStatus,
} from '../models';

export function isRefStatus(arg: any): arg is RefStatus {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

