/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import productRouter from './routers/products.router';
import { connectDB } from '@e-shop/database';

connectDB(process.env.DATABASE_URI);

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.use('/api/v1/products', productRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
