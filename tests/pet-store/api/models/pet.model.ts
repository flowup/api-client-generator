/* tslint:disable */
import {
  Category,
  Tag,
} from '.';

export interface Pet {
  category?: Category;
  id?: number;
  name: string;
  photoUrls: string[];
  status?: ('available' | 'pending' | 'sold');  // pet status in the store
  tags?: Tag[];
}
