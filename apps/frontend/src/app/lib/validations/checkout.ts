import { z } from 'zod';
import {
  addressSchema,
  orderContactSchema,
  orderCustomerNoteSchema,
} from '@e-shop/validations';
import { CheckoutInformation } from '../types';

export type CheckoutInformationFrom = CheckoutInformation;

export const checkoutInformationFormSchema = z.intersection(
  addressSchema,
  orderContactSchema,
  orderCustomerNoteSchema,
);
