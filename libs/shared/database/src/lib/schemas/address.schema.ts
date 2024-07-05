import mongoose from 'mongoose';

import type { AddressSchema } from '@e-shop/types';

export const addressSchema = new mongoose.Schema<AddressSchema>({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  postalCode: {
    type: String,
    required: true,
    trim: true,
    // TODO validate by used isPostalCode from https://www.npmjs.com/package/validator
  },
});
