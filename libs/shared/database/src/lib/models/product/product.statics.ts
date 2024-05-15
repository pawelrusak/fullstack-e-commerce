import mongoose from 'mongoose';
import { ProductSchema } from '@e-shop/types';
import {
  renameFilterKeysRelatedToCategories,
  validateAndConvertFilterData,
} from './product.utils';

export type ProductFindAllWithCategories = {
  findAllWithCategories(filter: unknown): mongoose.Aggregate<ProductSchema[]>;
};

export function findAllWithCategories(
  this: mongoose.Model<ProductSchema>,
  filter: unknown
) {
  const validatedFilter = validateAndConvertFilterData(filter);

  const match = renameFilterKeysRelatedToCategories(validatedFilter);

  const aggregationSteps: mongoose.PipelineStage[] = [
    {
      $lookup: {
        from: 'subcategories',
        localField: 'subCategory',
        foreignField: '_id',
        as: '_subCategory',
      },
    },
    { $unwind: { path: '$_subCategory', preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: 'categories',
        localField: '_subCategory.category',
        foreignField: '_id',
        as: '_subCategory._category',
      },
    },
    {
      $unwind: {
        path: '$_subCategory._category',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        subCategory: {
          _id: '$_subCategory._id',
          name: '$_subCategory.name',
          category: {
            _id: '$_subCategory._category._id',
            name: '$_subCategory._category.name',
          },
        },
      },
    },
    {
      $project: {
        _subCategory: 0,
      },
    },
  ];

  if (Object.keys(match).length > 0) {
    aggregationSteps.splice(4, 0, { $match: match });
  }

  return this.aggregate<ProductSchema>(aggregationSteps);
}
