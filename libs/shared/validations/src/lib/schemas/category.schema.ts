import { z } from 'zod';
import { idSchema } from './shared.schema';

export const categorySchema = z
  .object({
    name: z.string(),
    slug: z.string().optional(),
  })
  .merge(idSchema);

export const subCategorySchema = z
  .object({
    category: categorySchema,
  })
  .merge(categorySchema);
