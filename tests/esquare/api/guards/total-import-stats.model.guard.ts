/* tslint:disable */
import {
  TotalImportStats,
} from '../models';
import {
  isImportStatsGroup,
  isSchoolImportStats,
} from '.';

export function isTotalImportStats(arg: any): arg is TotalImportStats {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // bySchools?: SchoolImportStats[]
    ( typeof arg.bySchools === 'undefined' || (Array.isArray(arg.bySchools) && arg.bySchools.every(item => isSchoolImportStats(item))) ) &&
  // total?: ImportStatsGroup
    ( typeof arg.total === 'undefined' || isImportStatsGroup(arg.total) ) &&

    true
  );
}

