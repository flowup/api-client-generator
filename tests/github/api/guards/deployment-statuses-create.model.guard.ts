/* tslint:disable */
import {
  DeploymentStatusesCreate,
} from '../models';

export function isDeploymentStatusesCreate(arg: any): arg is DeploymentStatusesCreate {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // state?: string
    ( typeof arg.state === 'undefined' || typeof arg.state === 'string' ) &&
  // target_url?: string
    ( typeof arg.target_url === 'undefined' || typeof arg.target_url === 'string' ) &&

    true
  );
}

