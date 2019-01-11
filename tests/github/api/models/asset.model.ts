/* tslint:disable */

export interface Asset {
  content_type: string;
  created_at: string;
  download_count: number;
  id: number;
  label: string;
  name: string;
  size: number;
  state: string;
  updated_at: string;
  uploader: { [key: string]: any };
  url: string;
}
