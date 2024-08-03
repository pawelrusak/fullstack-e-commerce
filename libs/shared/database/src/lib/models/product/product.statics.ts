import mongoose from 'mongoose';
import { ProductSchema, Brand, Order as TOrder } from '@e-shop/types';
import {
  renameFilterKeysRelatedToCategories,
  validateAndConvertFilterData,
  getOrderedProductsFromOrder,
} from './product.utils';

export type ProductFindAllWithCategories = {
  findAllWithCategories(filter: unknown): mongoose.Aggregate<ProductSchema[]>;
};

export function findAllWithCategories(
  this: mongoose.Model<ProductSchema>,
  filter: unknown,
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
          slug: '$_subCategory.slug',
          category: {
            _id: '$_subCategory._category._id',
            name: '$_subCategory._category.name',
            slug: '$_subCategory._category.slug',
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

export type ProductFindAllBrandsAndCount = {
  findAllBrandsAndCount(): mongoose.Aggregate<Brand[]>;
};

export function findAllBrandsAndCount(this: mongoose.Model<ProductSchema>) {
  const aggregationSteps: mongoose.PipelineStage[] = [
    {
      $group: {
        _id: '$brand',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: '$_id',
        name: '$_id',
        count: 1,
      },
    },
  ];

  return this.aggregate<ProductSchema>(aggregationSteps);
}

export type OrderedProducts = Pick<TOrder, 'products'>;

export type ProductUpdateStockByOrder<
  TRawDocType = OrderedProducts,
  // eslint-disable-next-line @typescript-eslint/ban-types
  TQueryHelpers = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  TInstanceMethods = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  TVirtuals = {},
> = {
  updateStockByOrder(
    order: OrderedProducts,
    options?:
      | (mongoose.mongo.UpdateOptions &
          mongoose.MongooseUpdateQueryOptions<TRawDocType>)
      | null,
  ): ReturnType<
    mongoose.Model<
      TRawDocType,
      TQueryHelpers,
      TInstanceMethods,
      TVirtuals
    >['updateOne']
  >[];
};

export async function updateStockByOrder(
  this: mongoose.Model<ProductSchema>,
  order: OrderedProducts,
  options?:
    | (mongoose.mongo.UpdateOptions &
        mongoose.MongooseUpdateQueryOptions<OrderedProducts>)
    | null,
) {
  const orderedProducts = getOrderedProductsFromOrder(order);

  const updateProductsQueryPromises = orderedProducts.map((orderedProduct) =>
    this.updateOne(
      { _id: orderedProduct.productId },
      { $inc: { stock: -orderedProduct.quantity } },
      options,
    ),
  );

  return Promise.all(updateProductsQueryPromises);
}
