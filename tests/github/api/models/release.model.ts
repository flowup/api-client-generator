/* tslint:disable */

export interface Release {
  assets?: { [key: string]: any }[];
  assets_url?: string;
  author?: { [key: string]: any };
  body?: string;
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  id?: number;
  name?: string;
  prerelease?: boolean;
  published_at?: string;
  tag_name?: string;
  tarball_url?: string;
  target_commitish?: string;
  upload_url?: string;
  url?: string;
  zipball_url?: string;
}
