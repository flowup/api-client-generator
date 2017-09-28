import { discussionDiscussion } from './discussiondiscussion.model'

export interface discussionDiscussion {
  id: string;
  parentId: string;
  authorId: string;
  authorName: string;
  date: string;
  entityId: string;
  type: string;
  message: string;
  subject: string;
  updatedAt: string;
  stared: boolean;
  comments: discussionDiscussion[];
}
