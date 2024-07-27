import mongoose from 'mongoose';

import type { ShippingMethodSchema } from '@e-shop/types';

export const shippingMethodSchema = new mongoose.Schema<ShippingMethodSchema>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    cost: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ShippingMethod = mongoose.model<ShippingMethodSchema>(
  'ShippingMethod',
  shippingMethodSchema,
);
