import { z, ZodType } from 'zod';
import { OrderCustomerNote } from '@e-shop/types';

export const orderCustomerNoteSchema: ZodType<OrderCustomerNote> = z.object({
  customerNote: z.string().optional(),
});
