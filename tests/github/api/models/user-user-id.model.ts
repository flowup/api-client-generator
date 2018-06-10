/* tslint:disable */

export interface UserUserId {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  email: string;  // Note: The returned email is the userâ€™s publicly visible email address (or null if the user has not specified a public email address in their profile).
  followers: number;
  following: number;
  gravatar_id: string;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  public_gists: number;
  public_repos: number;
  type: string;
  url: string;
}
