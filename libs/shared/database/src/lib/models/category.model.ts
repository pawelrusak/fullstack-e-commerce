import mongoose from 'mongoose';
import type { CategorySchema } from '@e-shop/types';

export const categorySchema = new mongoose.Schema<CategorySchema>({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export const Category = mongoose.model<CategorySchema>(
  'Category',
  categorySchema
);
