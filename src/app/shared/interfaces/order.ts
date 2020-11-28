import { Product } from './product';

import { Product as product } from './../interfaces/product';

export interface Order {
  id: string;
  name?: string;
  table?: string;
  products?: product[];
}
