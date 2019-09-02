/* tslint:disable */
import {
  Forks,
} from '../models';

export function isForks(arg: any): arg is Forks {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

