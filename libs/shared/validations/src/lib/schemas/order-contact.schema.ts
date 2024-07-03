import { z, ZodType } from 'zod';
import { OrderContact } from '@e-shop/types';

export const orderContactSchema: ZodType<OrderContact> = z.object({
  firstName: z.string().min(2).max(64).trim(),
  lastName: z.string().min(2).max(64).trim(),
  // TODO improve phone validation (change min and max length etc.)
  phone: z.string().trim().min(1),
  email: z.string().email().max(8).max(256).trim(),
});
