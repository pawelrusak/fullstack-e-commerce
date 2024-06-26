import mongoose from 'mongoose';
import type { OrderSchema } from '@e-shop/types';
import { addressSchema } from '../schemas/address.schema';

export const orderSchema = new mongoose.Schema<OrderSchema>(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    contact: {
      email: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        /**
         * @see {@link https://www.rfc-editor.org/rfc/rfc5321#section-4.5.3.1.3 | RFC 5321}
         */
        maxLength: 256,
      },
      phone: {
        type: String,
        required: true,
        trim: true,
      },
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        currentProductPrice: {
          type: Number,
          required: true,
          min: 0,
        },
        productsTotalPrice: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    status: {
      type: String,
      required: true,
      enum: [
        'pending',
        'on-hold',
        'failed',
        'processing',
        'cancelled',
        'completed',
        'refunded',
      ],
    },
    statusCode: {
      type: Number,
      required: true,
      min: 0,
      max: 6,
    },
    shippingAddress: addressSchema,
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentAt: {
      type: Date,
      required: false,
    },
    cancelledAt: {
      type: Date,
      required: false,
    },
    refundedAt: {
      type: Date,
      required: false,
    },
    completedAt: {
      type: Date,
      required: false,
    },
    processingAt: {
      type: Date,
      required: false,
    },
    failedAt: {
      type: Date,
      required: false,
    },
    pendingAt: {
      type: Date,
      required: false,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['paypal', 'stripe', 'cash'],
    },
    customerNote: {
      type: String,
      required: false,
      trim: true,
      max: 1000,
    },
  },
  {
    timestamps: true,
  },
);

export const Order = mongoose.model('Order', orderSchema);