import { Product } from './product';

import { Product } from './../interfaces/product';

export interface Order {
  id: string;
  name?: string;
  table?: string;
  products?: Product[];
}
