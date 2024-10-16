import mongoose from 'mongoose';
import type { ProductSchema } from '@e-shop/types';
import {
  findAllWithCategories,
  findAllBrandsAndCount,
  updateStockByOrder,
} from './product.statics';
import type {
  ProductFindAllWithCategories,
  ProductFindAllBrandsAndCount,
  ProductUpdateStockByOrder,
} from './product.statics';

type ProductModel = mongoose.Model<ProductSchema> &
  ProductFindAllWithCategories &
  ProductFindAllBrandsAndCount &
  ProductUpdateStockByOrder;

export const productSchema = new mongoose.Schema<ProductSchema, ProductModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 300,
    },
    description: {
      type: String,
      required: true,
      minLength: 3,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
      trim: true,
      minLength: 3,
    },
    // TODO create brand model
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    thumbnail: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
    },
    //  TODO add "metrics" field for example metrics: { ordersCount: Number, viewCount: Number }
    size: {
      width: {
        type: Number,
        required: true,
        min: 0,
      },
      height: {
        type: Number,
        required: true,
        min: 0,
      },
      depth: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

productSchema.statics['findAllWithCategories'] = findAllWithCategories;
productSchema.statics['findAllBrandsAndCount'] = findAllBrandsAndCount;
productSchema.statics['updateStockByOrder'] = updateStockByOrder;

export const Product = mongoose.model<ProductSchema, ProductModel>(
  'Product',
  productSchema,
);
