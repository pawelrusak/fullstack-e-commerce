import { z, ZodType } from 'zod';
import { CustomerContact } from '@e-shop/types';

export const contactSchema: ZodType<CustomerContact> = z.object({
  firstName: z.string().min(2).max(64).trim(),
  lastName: z.string().min(2).max(64).trim(),
  phone: z.string().trim(),
  email: z.string().email().max(8).max(256).trim(),
});
