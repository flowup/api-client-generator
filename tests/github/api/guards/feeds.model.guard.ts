/* tslint:disable */
import {
  Feeds,
} from '../models';

export function isFeeds(arg: any): arg is Feeds {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // _links?: any
    ( typeof arg._links === 'undefined' || isany(arg._links) ) &&
  // current_user_actor_url?: string
    ( typeof arg.current_user_actor_url === 'undefined' || typeof arg.current_user_actor_url === 'string' ) &&
  // current_user_organization_url?: string
    ( typeof arg.current_user_organization_url === 'undefined' || typeof arg.current_user_organization_url === 'string' ) &&
  // current_user_public?: string
    ( typeof arg.current_user_public === 'undefined' || typeof arg.current_user_public === 'string' ) &&
  // current_user_url?: string
    ( typeof arg.current_user_url === 'undefined' || typeof arg.current_user_url === 'string' ) &&
  // timeline_url?: string
    ( typeof arg.timeline_url === 'undefined' || typeof arg.timeline_url === 'string' ) &&
  // user_url?: string
    ( typeof arg.user_url === 'undefined' || typeof arg.user_url === 'string' ) &&

    true
  );
}

