import { z } from 'zod';

export const idSchema = z.object({
  _id: z.string(),
});

export const timestampSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
});
