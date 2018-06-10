/* tslint:disable */

export interface CreateDownload {
  accesskeyid: string;
  acl: string;
  bucket: string;
  content_type: string;
  description: string;
  download_count: number;
  expirationdate: string;  // ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
  html_url: string;
  id: number;
  mime_type: string;
  name: string;
  path: string;
  policy: string;
  prefix: string;
  redirect: boolean;
  s3_url: string;
  signature: string;
  size: number;
  url: string;
}
