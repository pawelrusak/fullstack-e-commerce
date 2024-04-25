import mongoose, { ConnectOptions } from 'mongoose';

export function connectDB(
  databaseUri: string,
  connectOptions?: ConnectOptions
) {
  try {
    mongoose.connect(databaseUri, connectOptions);
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.info(`Successful database connected: ${databaseUri}`);
  });

  dbConnection.on('error', (error) => {
    console.error(`Failure connection, error: ${error}`);
  });
}
