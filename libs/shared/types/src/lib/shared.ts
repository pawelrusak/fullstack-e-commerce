import type mongoose from 'mongoose';

export type Id = {
  _id: string;
};

export type IdSchema = {
  _id: mongoose.Types.ObjectId;
};

export type Timestamp = {
  createdAt: string;
  updatedAt: string;
};

/**
 * A Mongoose-compatible version of {@link Timestamp}.
 */
export type TimestampSchema = {
  createdAt: Date;
  updatedAt: Date;
};
