/* tslint:disable */
import {
  Document,
} from './..';

export interface ListDocumentsResponse {
  documents: Document[];
  nextPageToken: string;
}
