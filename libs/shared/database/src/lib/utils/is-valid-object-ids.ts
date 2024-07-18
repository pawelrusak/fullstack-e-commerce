import mongoose from 'mongoose';

type ObjectId = Parameters<typeof mongoose.isValidObjectId>[0];

export function isValidObjectIds(...objectIds: ObjectId[]) {
  return objectIds.every(mongoose.isValidObjectId);
}
