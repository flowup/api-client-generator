/* tslint:disable */
import {
  DeploymentStatuses,
} from '../models';

export function isDeploymentStatuses(arg: any): arg is DeploymentStatuses {
  return (
    arg != null &&
    typeof arg === 'object' &&

    true
  );
}

