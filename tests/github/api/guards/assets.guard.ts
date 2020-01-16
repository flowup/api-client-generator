/* tslint:disable */
import {
  Assets,
} from '../models';

export function isAssets(arg: any): arg is Assets {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

