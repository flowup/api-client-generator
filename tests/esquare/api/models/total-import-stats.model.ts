/* tslint:disable */
import {
  ImportStatsGroup,
  SchoolImportStats,
} from '.';

export interface TotalImportStats {
  bySchools?: SchoolImportStats[];
  total?: ImportStatsGroup;
}
