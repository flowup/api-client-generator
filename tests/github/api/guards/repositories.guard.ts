/* tslint:disable */
import {
  Repositories,
} from '../models';

export function isRepositories(arg: any): arg is Repositories {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

