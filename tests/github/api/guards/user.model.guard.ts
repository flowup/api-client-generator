/* tslint:disable */
import {
  User,
} from '../models';

export function isUser(arg: any): arg is User {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // avatar_url?: string
    ( typeof arg.avatar_url === 'undefined' || typeof arg.avatar_url === 'string' ) &&
  // bio?: string
    ( typeof arg.bio === 'undefined' || typeof arg.bio === 'string' ) &&
  // blog?: string
    ( typeof arg.blog === 'undefined' || typeof arg.blog === 'string' ) &&
  // collaborators?: number
    ( typeof arg.collaborators === 'undefined' || typeof arg.collaborators === 'number' ) &&
  // company?: string
    ( typeof arg.company === 'undefined' || typeof arg.company === 'string' ) &&
  // created_at?: string
    ( typeof arg.created_at === 'undefined' || typeof arg.created_at === 'string' ) &&
  // disk_usage?: number
    ( typeof arg.disk_usage === 'undefined' || typeof arg.disk_usage === 'number' ) &&
  // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
  // followers?: number
    ( typeof arg.followers === 'undefined' || typeof arg.followers === 'number' ) &&
  // following?: number
    ( typeof arg.following === 'undefined' || typeof arg.following === 'number' ) &&
  // gravatar_id?: string
    ( typeof arg.gravatar_id === 'undefined' || typeof arg.gravatar_id === 'string' ) &&
  // hireable?: boolean
    ( typeof arg.hireable === 'undefined' || typeof arg.hireable === 'boolean' ) &&
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
  // owned_private_repos?: number
    ( typeof arg.owned_private_repos === 'undefined' || typeof arg.owned_private_repos === 'number' ) &&
  // plan?: { [key: string]: any }
    ( typeof arg.plan === 'undefined' || typeof arg.plan === '{ [key: string]: any }' ) &&
  // private_gists?: number
    ( typeof arg.private_gists === 'undefined' || typeof arg.private_gists === 'number' ) &&
  // public_gists?: number
    ( typeof arg.public_gists === 'undefined' || typeof arg.public_gists === 'number' ) &&
  // public_repos?: number
    ( typeof arg.public_repos === 'undefined' || typeof arg.public_repos === 'number' ) &&
  // total_private_repos?: number
    ( typeof arg.total_private_repos === 'undefined' || typeof arg.total_private_repos === 'number' ) &&
  // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&
  // url?: string
    ( typeof arg.url === 'undefined' || typeof arg.url === 'string' ) &&

    true
  );
}

