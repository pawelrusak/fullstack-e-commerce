import { z, ZodType } from 'zod';
import { Address } from '@e-shop/types';

export const addressSchema: ZodType<Address> = z.object({
  address: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  postalCode: z.string(),
});
