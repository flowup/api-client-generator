/* tslint:disable */

export interface OrgTeamsPost {
  name: string;
  permission?: 'pull' | 'push' | 'admin';
  repo_names?: string[];
}
