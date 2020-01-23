/* tslint:disable */

export interface User {
  avatar_url?: string;
  bio?: string;
  blog?: string;
  collaborators?: number;
  company?: string;
  created_at?: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  disk_usage?: number;
  email?: string;
  followers?: number;
  following?: number;
  gravatar_id?: string;
  hireable?: boolean;
  html_url?: string;
  id?: number;
  location?: string;
  login?: string;
  name?: string;
  owned_private_repos?: number;
  plan?: object;
  private_gists?: number;
  public_gists?: number;
  public_repos?: number;
  total_private_repos?: number;
  type?: string;
  url?: string;
}
