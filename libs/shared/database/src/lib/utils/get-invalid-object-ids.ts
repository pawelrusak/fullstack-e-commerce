import mongoose from 'mongoose';

type ObjectId = Parameters<typeof mongoose.isValidObjectId>[0];

export function getInvalidObjectIds(...objectIds: ObjectId[]) {
  return objectIds.filter((productId) => !mongoose.isValidObjectId(productId));
}
