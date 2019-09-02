/* tslint:disable */
import {
  RepoDeployments,
} from '../models';

export function isRepoDeployments(arg: any): arg is RepoDeployments {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

