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

export type TimestampSchema = {
  createdAt: Date;
  updatedAt: Date;
};
