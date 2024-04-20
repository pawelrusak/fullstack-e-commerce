import type { Id, Timestamp } from './shared';
import type { SubCategory } from './category';

export type Size = {
  width: number;
  height: number;
  depth: number;
};

export type Product = Id &
  Timestamp & {
    name: string;
    description: string;
    brand: string;
    price: number;
    stock: number;
    thumbnail?: string;
    images: string[];
    size: Size;
    subCategory: SubCategory;
    isFeatured: boolean;
  };
