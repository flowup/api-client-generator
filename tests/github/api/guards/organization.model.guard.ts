/* tslint:disable */
import {
  Organization,
} from '../models';

export function isOrganization(arg: any): arg is Organization {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // avatar_url?: string
    ( typeof arg.avatar_url === 'undefined' || typeof arg.avatar_url === 'string' ) &&
  // blog?: string
    ( typeof arg.blog === 'undefined' || typeof arg.blog === 'string' ) &&
  // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
  // followers?: number
    ( typeof arg.followers === 'undefined' || typeof arg.followers === 'number' ) &&
  // following?: number
    ( typeof arg.following === 'undefined' || typeof arg.following === 'number' ) &&
  // html_url?: string
    ( typeof arg.html_url === 'undefined' || typeof arg.html_url === 'string' ) &&
  // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
  // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
  // login?: string
    ( typeof arg.login === 'undefined' || typeof arg.login === 'string' ) &&
  // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
  // public_gists?: number
    ( typeof arg.public_gists === 'undefined' || typeof arg.public_gists === 'number' ) &&
  // public_repos?: number
    ( typeof arg.public_repos === 'undefined' || typeof arg.public_repos === 'number' ) &&
  // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

