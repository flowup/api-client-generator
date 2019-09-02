/* tslint:disable */
import {
  DashboardViewModel,
} from '../models';

export function isDashboardViewModel(arg: any): arg is DashboardViewModel {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

