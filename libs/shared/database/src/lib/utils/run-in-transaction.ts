import mongoose from 'mongoose';

export type TransactionCallback = (
  clientSession: mongoose.ClientSession,
) => Promise<void>;

mongoose.Document;

export async function runInTransaction(callback: TransactionCallback) {
  const clientSession = await mongoose.startSession();

  clientSession.startTransaction();

  try {
    await callback(clientSession);

    await clientSession.commitTransaction();
  } catch (error) {
    await clientSession.abortTransaction();

    throw error;
  } finally {
    await clientSession.endSession();
  }
}
