import type mongoose from 'mongoose';
import type { Prettify, Modify } from './utils';
import type { Id, Timestamp, TimestampSchema } from './shared';

export type ShippingMethod = Id & {
  name: string;
  cost: number;
  image?: string;
} & Timestamp;

export type ShippingMethodSchema = Prettify<
  Modify<
    ShippingMethod,
    {
      _id: mongoose.Types.ObjectId;
    } & TimestampSchema
  >
>;
