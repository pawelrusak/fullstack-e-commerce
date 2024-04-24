import type { Id, Timestamp } from './shared';
import type { SubCategory, SubCategorySchema } from './category';
import type { Types } from 'mongoose';
import type { Modify, Prettify } from './utils';

export type Size = {
  width: number;
  height: number;
  depth: number;
};

export type Product = Id &
  Timestamp & {
    name: string;
    description: string;
    slug?: string;
    brand: string;
    price: number;
    stock: number;
    thumbnail?: string;
    images: string[];
    size: Size;
    subCategory: SubCategory;
    isFeatured: boolean;
  };

export type ProductSchema = Prettify<
  Modify<
    Product,
    {
      _id: Types.ObjectId;
      subCategory: Types.Subdocument<SubCategorySchema>;
      images: Types.Array<string>;
    }
  >
>;
