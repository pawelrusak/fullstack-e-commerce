import { z } from 'zod';
import { idSchema, timestampSchema } from './shared.schema';
import { subCategorySchema } from './category.schema';

export const sizeSchema = z.object({
  width: z.string().transform(Number),
  height: z.string().transform(Number),
  depth: z.string().transform(Number),
});

export const productBaseSchema = z.object({
  name: z.string(),
  description: z.string(),
  slug: z.string().optional(),
  brand: z.string(),
  price: z.preprocess((val) => parseFloat(val as string), z.number()),
  stock: z.preprocess((val) => parseInt(val as string, 10), z.number()),
  thumbnail: z.string().optional(),
  images: z.array(z.string()),
  size: sizeSchema,
  subCategory: subCategorySchema,
  isFeatured: z.preprocess(
    (val) => String(val).trim().toLocaleLowerCase() === 'true',
    z.boolean(),
  ),
});

export const productSchema = productBaseSchema
  .merge(idSchema)
  .merge(timestampSchema);
