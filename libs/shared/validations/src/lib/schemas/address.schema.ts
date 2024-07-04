import { z } from 'zod';

// TODO improve schema (change min and max length etc.)
export const addressSchema = z.object({
  address: z.string().min(1).trim(),
  country: z.string().min(1).trim(),
  state: z.string().min(1).trim(),
  city: z.string().min(1).trim(),
  postalCode: z.string().min(1).trim(),
});
