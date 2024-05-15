import mongoose from 'mongoose';
import type { SubCategorySchema } from '@e-shop/types';

export const subcategorySchema = new mongoose.Schema<SubCategorySchema>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

export const SubCategory = mongoose.model<SubCategorySchema>(
  'SubCategory',
  subcategorySchema
);
