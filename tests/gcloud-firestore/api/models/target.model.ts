/* tslint:disable */
import {
  DocumentsTarget,
  QueryTarget,
} from './..';

export interface Target {
  documents: DocumentsTarget;
  once: boolean;
  query: QueryTarget;
  readTime: string;
  resumeToken: string;
  targetId: number;
}
