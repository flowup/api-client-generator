/* tslint:disable */
import {
  TotalImportStats,
} from '../models';
import { isImportStatsGroup } from './import-stats-group.guard';
import { isSchoolImportStats } from './school-import-stats.guard';

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

