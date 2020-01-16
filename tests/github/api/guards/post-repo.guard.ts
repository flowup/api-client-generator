/* tslint:disable */
import {
  PostRepo,
} from '../models';

export function isPostRepo(arg: any): arg is PostRepo {
  return (
    arg != null &&
    typeof arg === 'object' &&
  // auto_init?: boolean
    ( typeof arg.auto_init === 'undefined' || typeof arg.auto_init === 'boolean' ) &&
  // description?: string
    ( typeof arg.description === 'undefined' || typeof arg.description === 'string' ) &&
  // gitignore_template?: string
    ( typeof arg.gitignore_template === 'undefined' || typeof arg.gitignore_template === 'string' ) &&
  // has_downloads?: boolean
    ( typeof arg.has_downloads === 'undefined' || typeof arg.has_downloads === 'boolean' ) &&
  // has_issues?: boolean
    ( typeof arg.has_issues === 'undefined' || typeof arg.has_issues === 'boolean' ) &&
  // has_wiki?: boolean
    ( typeof arg.has_wiki === 'undefined' || typeof arg.has_wiki === 'boolean' ) &&
  // homepage?: string
    ( typeof arg.homepage === 'undefined' || typeof arg.homepage === 'string' ) &&
  // name: string
    ( typeof arg.name === 'string' ) &&
  // private?: boolean
    ( typeof arg.private === 'undefined' || typeof arg.private === 'boolean' ) &&
  // team_id?: number
    ( typeof arg.team_id === 'undefined' || typeof arg.team_id === 'number' ) &&

    true
  );
}

