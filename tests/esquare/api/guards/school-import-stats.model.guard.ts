/* tslint:disable */
import {
  SchoolImportStats,
} from '../models';
import {
  isImportStatsGroup,
} from '.';

export function isSchoolImportStats(arg: any): arg is SchoolImportStats {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // stats?: ImportStatsGroup
    ( typeof arg.stats === 'undefined' || isImportStatsGroup(arg.stats) ) &&
  // title?: string
    ( typeof arg.title === 'undefined' || typeof arg.title === 'string' ) &&

    true
  );
}

