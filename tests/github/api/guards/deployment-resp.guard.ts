/* tslint:disable */
import {
  DeploymentResp,
} from '../models';

export function isDeploymentResp(arg: any): arg is DeploymentResp {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // creator?: { [key: string]: any }
    ( typeof arg.creator === 'undefined' || typeof arg.creator === 'object' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // payload?: string
    ( typeof arg.payload === 'undefined' || typeof arg.payload === 'string' ) &&
  // sha?: string
    ( typeof arg.sha === 'undefined' || typeof arg.sha === 'string' ) &&
  // statuses_url?: string
    ( typeof arg.statuses_url === 'undefined' || typeof arg.statuses_url === 'string' ) &&
  // updated_at?: string
    ( typeof arg.updated_at === 'undefined' || typeof arg.updated_at === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

